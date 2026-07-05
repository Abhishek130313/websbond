export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { model, inputs } = req.body;
  if (!model || !inputs) {
    return res.status(400).json({ error: 'Missing model or inputs' });
  }

  const token = process.env.VITE_HF_TOKEN;
  if (!token) {
    return res.status(500).json({ error: 'HuggingFace Token not configured on server' });
  }

  try {
    const response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ error: errorText });
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    res.setHeader('Content-Type', response.headers.get('content-type') || 'application/octet-stream');
    res.send(buffer);
  } catch (error) {
    console.error('HF Proxy Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
