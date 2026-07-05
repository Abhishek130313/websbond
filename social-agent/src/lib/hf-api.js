// Hugging Face Inference API integration

function getHFToken() {
  return import.meta.env.VITE_HF_TOKEN || localStorage.getItem('wb_hf_token') || '';
}

// ── Generate AI Avatar (Text-to-Image) ───────────────────
export async function generateAvatar(prompt) {
  const token = getHFToken();
  if (!token) throw new Error("Add Hugging Face Token in Settings");

  // Using a solid free model for image generation
  const model = "stabilityai/stable-diffusion-xl-base-1.0"; 

  const res = await fetch("/api/hf", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ model, inputs: prompt }),
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

  const res = await fetch("/api/hf", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ model, inputs: text }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `Hugging Face API Error (${res.status})`);
  }

  const blob = await res.blob();
  return URL.createObjectURL(blob);
}
