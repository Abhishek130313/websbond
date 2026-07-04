import { useState, useEffect, useRef } from "react";

interface LazyVideoProps {
  src: string;
  className?: string;
}

export const LazyVideo = ({ src, className = "absolute inset-0 w-full h-full object-cover" }: LazyVideoProps) => {
  const [loadVideo, setLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Mount the video after 4 seconds, or immediately on first user interaction (scroll/click/touch)
    const timer = setTimeout(() => {
      setLoadVideo(true);
    }, 4000);

    const triggerEvents = ["scroll", "click", "touchstart", "mousemove"];
    const handleInteraction = () => {
      setLoadVideo(true);
      clearTimeout(timer);
      triggerEvents.forEach((event) => {
        window.removeEventListener(event, handleInteraction);
      });
    };

    triggerEvents.forEach((event) => {
      window.addEventListener(event, handleInteraction, { passive: true });
    });

    return () => {
      clearTimeout(timer);
      triggerEvents.forEach((event) => {
        window.removeEventListener(event, handleInteraction);
      });
    };
  }, []);

  useEffect(() => {
    if (loadVideo && videoRef.current) {
      const video = videoRef.current;
      // Force set attributes directly on DOM node for iOS/Safari compliance
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.defaultMuted = true;
      video.muted = true;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay interaction failed or was prevented by browser:", error);
        });
      }
    }
  }, [loadVideo]);

  if (loadVideo) {
    return (
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={className}
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  return null;
};

