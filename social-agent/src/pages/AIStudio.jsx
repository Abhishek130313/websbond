import React, { useState } from 'react'
import { generateAvatar, generateVoice } from '../lib/hf-api'
import VideoEngine from '../components/VideoEngine'
import { Settings, Sparkles, Video, Music } from 'lucide-react'

export default function AIStudio() {
  const [topic, setTopic] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const [scenes, setScenes] = useState([])
  const [audioUrl, setAudioUrl] = useState(null)
  
  const [elevenLabsKey, setElevenLabsKey] = useState(localStorage.getItem('wb_elevenlabs_key') || '')
  const [showSettings, setShowSettings] = useState(false)

  const saveElevenLabsKey = (key) => {
    setElevenLabsKey(key)
    localStorage.setItem('wb_elevenlabs_key', key)
  }

  const handleGenerateVideo = async () => {
    if (!topic.trim()) return
    setLoading(true)
    setError(null)
    setScenes([])
    setAudioUrl(null)

    try {
      // 1. Generate Script (Mocking this for now, ideally call Llama 3 via CF API)
      // Since we don't have the Llama 3 CF API directly wired in hf-api.js yet,
      // we'll build a simple script based on the topic.
      const hook = `Are you struggling with ${topic}?`
      const body1 = `Here is the number one secret to master ${topic} today.`
      const body2 = `Start implementing this simple trick and see massive results.`
      const cta = `Follow us for more daily tips on ${topic}!`
      
      const fullScript = `${hook} ${body1} ${body2} ${cta}`
      
      // 2. Generate Audio (Voiceover)
      const audio = await generateVoice(fullScript)
      setAudioUrl(audio)

      // 3. Generate Visuals (Images)
      // We generate 4 images for the 4 sentences
      const imagePrompts = [
        `Cinematic hyper-realistic shot showing someone struggling with ${topic}, 4k resolution, highly detailed`,
        `A glowing secret box representing the solution to ${topic}, magical lighting, 4k`,
        `A successful person celebrating massive results in ${topic}, bright lighting, 4k`,
        `A modern social media follow button with a smartphone, 4k, hyper-realistic`
      ]

      const generatedScenes = []
      for (let i = 0; i < imagePrompts.length; i++) {
        const imgUrl = await generateAvatar(imagePrompts[i])
        generatedScenes.push({
          imageUrl: imgUrl,
          text: [hook, body1, body2, cta][i]
        })
      }

      setScenes(generatedScenes)

    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fade-in max-w-5xl mx-auto pb-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Video className="w-8 h-8 text-pink-500" />
            <h1 className="text-3xl font-extrabold text-white">Video Auto-Editor</h1>
          </div>
          <p className="text-gray-400 text-sm">
            Generate fully edited, ready-to-post Faceless Reels with AI Script, Voiceover, and Visuals.
          </p>
        </div>
        <button 
          onClick={() => setShowSettings(!showSettings)}
          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
        >
          <Settings className="w-5 h-5 text-gray-300" />
        </button>
      </div>

      {showSettings && (
        <div className="mb-8 p-6 rounded-xl bg-white/5 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-2 flex items-center">
            <Music className="w-4 h-4 mr-2 text-violet-400" /> 
            Hyper-Realistic Voice Settings
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            For an "Ekdam Real" Indian Male Voice, add your ElevenLabs API Key here. Otherwise, the free Cloudflare TTS will be used.
          </p>
          <input
            type="password"
            placeholder="sk_..."
            className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-pink-500 outline-none transition"
            value={elevenLabsKey}
            onChange={(e) => saveElevenLabsKey(e.target.value)}
          />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-fit">
          <h2 className="text-xl font-bold text-white mb-6">Create a New Reel</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">Video Topic / Niche</label>
              <textarea
                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-pink-500 outline-none transition resize-none"
                rows={3}
                placeholder="e.g. 3 Digital Marketing Secrets for 2026"
                value={topic}
                onChange={e => setTopic(e.target.value)}
              />
            </div>
            
            <button 
              className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-600 to-violet-600 text-white font-bold text-lg hover:opacity-90 transition disabled:opacity-50 flex justify-center items-center" 
              onClick={handleGenerateVideo} 
              disabled={loading || !topic.trim()}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Auto-Editing Video... (Takes ~2 mins)
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" /> Generate Full Video
                </>
              )}
            </button>

            {error && (
              <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl">
                {error}
              </div>
            )}
          </div>
        </div>

        {/* Video Player */}
        <div className="flex items-center justify-center bg-black/40 rounded-2xl border border-white/5 p-4 min-h-[600px]">
          {loading ? (
            <div className="flex flex-col items-center text-gray-400 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mb-4"></div>
              <p className="font-semibold text-white">Generating your Masterpiece...</p>
              <p className="text-sm mt-2 max-w-xs">Writing script, generating voiceover, painting visuals, and stitching everything together.</p>
            </div>
          ) : scenes.length > 0 && audioUrl ? (
            <VideoEngine scenes={scenes} audioUrl={audioUrl} />
          ) : (
            <div className="text-center text-gray-500">
              <Video className="w-16 h-16 mx-auto mb-4 opacity-20" />
              <p>Your finished video will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
