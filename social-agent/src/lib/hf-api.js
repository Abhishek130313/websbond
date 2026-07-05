// Switched from Hugging Face to Cloudflare Workers AI for 100% reliability
// This bypasses all adblocker and Vercel DNS issues that block HF.

const CF_API_BASE = "/cf-api/client/v4/accounts";

function getCFVars() {
  const token = import.meta.env.VITE_CF_TOKEN || localStorage.getItem('wb_cf_token') || '';
  const accountId = import.meta.env.VITE_CF_ACCOUNT_ID || localStorage.getItem('wb_cf_account') || '';
  return { token, accountId };
}

// ── Generate AI Avatar (Text-to-Image) ───────────────────
export async function generateAvatar(prompt) {
  const { token, accountId } = getCFVars();
  if (!token || !accountId) throw new Error("Add Cloudflare Token in Settings");

  // Using Cloudflare's stable diffusion XL
  const model = "@cf/stabilityai/stable-diffusion-xl-base-1.0"; 
  const url = `${CF_API_BASE}/${accountId}/ai/run/${model}`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => "");
    throw new Error(`Image Gen Error: ${res.status}`);
  }

  const blob = await res.blob();
  return URL.createObjectURL(blob);
}

// ── Generate AI Voice (Text-to-Speech) ───────────────────
export async function generateVoice(text) {
  // Check if ElevenLabs key exists for ultra-realistic voice
  const elevenLabsKey = localStorage.getItem('wb_elevenlabs_key');
  
  if (elevenLabsKey) {
    // Using a realistic Indian Male voice (e.g., "Aarav" or "Fin" or generic voice ID)
    // Here we use a generic known good voice ID for ElevenLabs or let the user configure it.
    // Defaulting to a strong male voice (e.g., "pNInz6obpgDQGcFmaJcg" which is Adam, or user can change)
    const voiceId = "pNInz6obpgDQGcFmaJcg"; 
    const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;
    
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "xi-api-key": elevenLabsKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        model_id: "eleven_multilingual_v2",
        voice_settings: { stability: 0.5, similarity_boost: 0.75 }
      }),
    });

    if (!res.ok) {
      throw new Error(`ElevenLabs Error: ${res.status}`);
    }
    const blob = await res.blob();
    return URL.createObjectURL(blob);
  }

  // Fallback to Cloudflare Deepgram Aura-2
  const { token, accountId } = getCFVars();
  if (!token || !accountId) throw new Error("Add Cloudflare Token in Settings");

  const model = "@cf/deepgram/aura-2-en"; 
  const url = `${CF_API_BASE}/${accountId}/ai/run/${model}`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => "");
    throw new Error(`Voice Gen Error: ${res.status}`);
  }

  const blob = await res.blob();
  return URL.createObjectURL(blob);
}
