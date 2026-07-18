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
  let isSuccess = false;

  // 1. Send to Lovable Leads Proxy (Cloudflare Worker)
  try {
    const LOVABLE_PROXY_URL = import.meta.env.VITE_LOVABLE_PROXY_URL || "https://websbond-leads.rangapestservice.workers.dev";
    const lovablePayload = {
      source: "website",
      contact: data.name,
      email: data.email,
      notes: "Phone: " + data.phone + "\n" + data.message,
      budget: "Not Specified",
      company: "Not Specified"
    };

    const res = await fetch(LOVABLE_PROXY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lovablePayload)
    });
    if (res.ok) isSuccess = true;
  } catch (err) {
    console.error("Lovable Proxy Failed:", err);
  }

  // 2. Try the old backend API (with a very short timeout so it doesn't hang)
  try {
    const apiUrl = getApiUrl("/api/contact");
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(3000), // reduced timeout to 3 seconds
    });
    if (res.ok) isSuccess = true;
  } catch (err) {
    console.warn("Primary Backend asleep or unreachable.");
  }

  // 3. Send WhatsApp notification
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
      const waRes = await fetch(`https://graph.facebook.com/v21.0/${WA_PHONE}/messages`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${WA_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(waMsg),
      });
      if (waRes.ok) isSuccess = true;
    } catch (err) {
      console.error("WhatsApp notification failed:", err);
    }
  }

  // If literally ALL endpoints failed, throw error
  if (!isSuccess) {
    throw new Error("All endpoints failed. Please check network connection.");
  }
};
