import React, { useRef, useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Download, Play, Square } from 'lucide-react';

// Advanced Canvas Video Engine
// Takes an array of scenes (image + duration + text) and audio URL,
// plays them back with transitions/captions, and records to WebM.

export default function VideoEngine({ scenes, audioUrl, onComplete }) {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [progress, setProgress] = useState(0);

  const startVideo = (record = false) => {
    if (!scenes || scenes.length === 0 || !audioUrl) return;
    
    setVideoUrl(null);
    setIsPlaying(true);
    if (record) setIsRecording(true);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const audio = audioRef.current;
    
    let animationFrameId;
    let startTime = Date.now();
    // Assuming audio is loaded and has a valid duration, otherwise fallback to 10s
    const totalDuration = (audio.duration && audio.duration !== Infinity) ? audio.duration * 1000 : scenes.length * 3000;
    
    if (record) {
      const stream = canvas.captureStream(30);
      try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const dest = audioCtx.createMediaStreamDestination();
        const source = audioCtx.createMediaElementSource(audio);
        source.connect(dest);
        source.connect(audioCtx.destination);
        
        const combinedStream = new MediaStream([
          ...stream.getVideoTracks(),
          ...dest.stream.getAudioTracks()
        ]);
        
        mediaRecorderRef.current = new MediaRecorder(combinedStream, { mimeType: 'video/webm;codecs=vp9,opus' });
      } catch (e) {
        console.warn("Audio routing failed, recording video only", e);
        mediaRecorderRef.current = new MediaRecorder(stream, { mimeType: 'video/webm' });
      }

      const chunks = [];
      mediaRecorderRef.current.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/webm' });
        setVideoUrl(URL.createObjectURL(blob));
        setIsRecording(false);
        setIsPlaying(false);
        if (onComplete) onComplete(blob);
      };
      
      mediaRecorderRef.current.start();
    }

    audio.currentTime = 0;
    audio.play();

    const images = scenes.map(scene => {
      const img = new Image();
      img.src = scene.imageUrl;
      return img;
    });

    const draw = () => {
      const elapsed = Date.now() - startTime;
      setProgress((elapsed / totalDuration) * 100);

      if (elapsed >= totalDuration) {
        if (record && mediaRecorderRef.current?.state === 'recording') {
          mediaRecorderRef.current.stop();
        } else {
          setIsPlaying(false);
          setProgress(100);
        }
        return;
      }

      const sceneDuration = totalDuration / scenes.length;
      const currentSceneIndex = Math.min(Math.floor(elapsed / sceneDuration), scenes.length - 1);
      const sceneElapsed = elapsed % sceneDuration;
      const sceneProgress = sceneElapsed / sceneDuration;

      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const img = images[currentSceneIndex];
      if (img.complete && img.naturalWidth > 0) {
        const imgRatio = img.width / img.height;
        const canvasRatio = canvas.width / canvas.height;
        let drawWidth, drawHeight, offsetX = 0, offsetY = 0;
        
        if (imgRatio > canvasRatio) {
          drawHeight = canvas.height;
          drawWidth = drawHeight * imgRatio;
          offsetX = (canvas.width - drawWidth) / 2;
        } else {
          drawWidth = canvas.width;
          drawHeight = drawWidth / imgRatio;
          offsetY = (canvas.height - drawHeight) / 2;
        }

        const scale = 1.0 + (sceneProgress * 0.1);
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        ctx.scale(scale, scale);
        ctx.translate(-canvas.width/2, -canvas.height/2);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        
        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.fillRect(-canvas.width/2, -canvas.height/2, canvas.width, canvas.height);
        ctx.restore();
      }

      const text = scenes[currentSceneIndex].text;
      if (text) {
        ctx.font = 'bold 52px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.lineWidth = 8;
        ctx.strokeStyle = 'black';
        ctx.lineJoin = 'round';
        
        const words = text.split(' ');
        const wordsToShow = Math.max(1, Math.floor(sceneProgress * words.length) + 1);
        const currentText = words.slice(0, wordsToShow).join(' ');

        const maxWidth = canvas.width * 0.85;
        wrapText(ctx, currentText, canvas.width/2, canvas.height/2, maxWidth, 64);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      audio.pause();
    };
  };

  const wrapText = (context, text, x, y, maxWidth, lineHeight) => {
    const words = text.split(' ');
    let line = '';
    let lines = [];

    for(let n = 0; n < words.length; n++) {
      let testLine = line + words[n] + ' ';
      let metrics = context.measureText(testLine);
      let testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        lines.push(line.trim());
        line = words[n] + ' ';
      } else {
        line = testLine;
      }
    }
    lines.push(line.trim());
    
    const totalHeight = lines.length * lineHeight;
    let startY = y - (totalHeight / 2) + (lineHeight / 2);
    
    for (let i = 0; i < lines.length; i++) {
      context.strokeText(lines[i], x, startY + (i * lineHeight));
      context.fillStyle = '#FFD700'; 
      if (i === lines.length - 1) {
          context.fillStyle = '#FFFFFF'; 
      }
      context.fillText(lines[i], x, startY + (i * lineHeight));
    }
  };

  const stopVideo = () => {
    setIsPlaying(false);
    if (mediaRecorderRef.current?.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
    audioRef.current?.pause();
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl bg-black">
        <canvas 
          ref={canvasRef} 
          width={720} 
          height={1280} 
          className="w-72 h-[512px] object-cover" 
        />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div 
            className="h-full bg-gradient-to-r from-pink-500 to-violet-500 transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <audio ref={audioRef} src={audioUrl} className="hidden" crossOrigin="anonymous" onLoadedMetadata={() => console.log('Audio loaded')} />

      <div className="flex space-x-3 w-full justify-center">
        {!isPlaying ? (
          <Button onClick={() => startVideo(false)} className="bg-white/10 hover:bg-white/20 px-8">
            <Play className="w-4 h-4 mr-2" /> Preview Reel
          </Button>
        ) : (
          <Button onClick={stopVideo} variant="destructive" className="px-8">
            <Square className="w-4 h-4 mr-2" /> Stop
          </Button>
        )}
        
        <Button 
          onClick={() => startVideo(true)} 
          disabled={isRecording || isPlaying}
          className="bg-gradient-to-r from-pink-600 to-violet-600 px-8"
        >
          {isRecording ? "Recording..." : "Export MP4"}
        </Button>

        {videoUrl && (
          <Button onClick={() => {
            const a = document.createElement('a');
            a.href = videoUrl;
            a.download = 'faceless_reel.webm';
            a.click();
          }} className="bg-emerald-600 hover:bg-emerald-700">
            <Download className="w-4 h-4 mr-2" /> Download
          </Button>
        )}
      </div>
    </div>
  );
}
