const API_BASE_URL = import.meta.env.VITE_API_URL || "";
const CONTACT_FALLBACK_URL = import.meta.env.VITE_CONTACT_API_URL || "/send-contact.php";
const WA_TOKEN = import.meta.env.VITE_WHATSAPP_TOKEN || "";
const WA_PHONE = import.meta.env.VITE_WHATSAPP_PHONE || "919306623619";

export const getApiUrl = (path: string): string => {
  const base = API_BASE_URL.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
};

interface FormPayload {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (data: FormPayload) => {
  const apiUrl = getApiUrl("/api/contact");

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    // Try PHP fallback
    const fallbackRes = await fetch(CONTACT_FALLBACK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!fallbackRes.ok) {
      throw new Error("All endpoints failed");
    }
  }

  // Send WhatsApp notification to company (fire-and-forget)
  if (WA_TOKEN) {
    try {
      const waMsg = {
        messaging_product: "whatsapp",
        to: WA_PHONE,
        type: "text",
        text: {
          body: `🔔 New Lead Received!\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nService: ${data.subject.replace("Strategy Call - ", "")}\nTime: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`,
        },
      };
      fetch(`https://graph.facebook.com/v21.0/${WA_PHONE}/messages`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${WA_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(waMsg),
      }).catch(() => {});
    } catch {}
  }
};
