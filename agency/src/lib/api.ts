const API_BASE_URL = import.meta.env.VITE_API_URL || "";
export const CONTACT_FALLBACK_URL = import.meta.env.VITE_CONTACT_API_URL || "/send-contact.php";
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

  let primaryOk = false;
  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(10000),
    });
    primaryOk = res.ok;
  } catch {
    primaryOk = false;
  }

  if (!primaryOk) {
    try {
      const fallbackRes = await fetch(CONTACT_FALLBACK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(10000),
      });
      if (!fallbackRes.ok) throw new Error("Fallback failed");
    } catch {
      throw new Error("All endpoints failed");
    }
  }

  // Send to Lovable Leads Proxy (Cloudflare Worker)
  try {
    const LOVABLE_PROXY_URL = import.meta.env.VITE_LOVABLE_PROXY_URL || "https://websbond-leads.rangapestservice.workers.dev";
    
    // Transform to match Lovable expected format
    const lovablePayload = {
      source: "website",
      contact: data.name,
      email: data.email,
      notes: "Phone: " + data.phone + "\n" + data.message,
      budget: "Not Specified",
      company: "Not Specified"
    };

    fetch(LOVABLE_PROXY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lovablePayload)
    }).catch(() => {});
  } catch {}

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
