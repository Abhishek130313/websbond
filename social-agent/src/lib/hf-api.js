// Hugging Face Inference API integration

const HF_API_BASE = "https://api-inference.huggingface.co/models";

function getHFToken() {
  return import.meta.env.VITE_HF_TOKEN || localStorage.getItem('wb_hf_token') || '';
}

// ── Generate AI Avatar (Text-to-Image) ───────────────────
export async function generateAvatar(prompt) {
  const token = getHFToken();
  if (!token) throw new Error("Add Hugging Face Token in Settings");

  // Using a solid free model for image generation
  const model = "stabilityai/stable-diffusion-3.5-large"; 
  const url = `${HF_API_BASE}/${model}`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputs: prompt }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `Hugging Face API Error (${res.status})`);
  }

  const blob = await res.blob();
  return URL.createObjectURL(blob);
}

// ── Generate AI Voice (Text-to-Speech) ───────────────────
export async function generateVoice(text) {
  const token = getHFToken();
  if (!token) throw new Error("Add Hugging Face Token in Settings");

  // A free TTS model. For Hindi, MMS is good, but for English/General, SpeechT5 is fast.
  // Using a fast model to avoid timeouts on free tier.
  const model = "facebook/mms-tts-hin"; 
  const url = `${HF_API_BASE}/${model}`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputs: text }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `Hugging Face API Error (${res.status})`);
  }

  const blob = await res.blob();
  return URL.createObjectURL(blob);
}
