export default {
  async fetch(request, env, ctx) {
    // 1. Handle CORS Preflight Requests
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    // 2. Only allow POST requests
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    try {
      const payload = await request.text();
      
      // 3. Get the secret from Cloudflare environment variables
      // You must set this in Cloudflare: Settings -> Variables and Secrets
      const secret = env.WEBSBOND_LEAD_WEBHOOK_SECRET;

      if (!secret) {
        return new Response(JSON.stringify({ error: "Missing Secret in Environment Variables" }), {
          status: 500,
          headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
        });
      }

      // 4. Forward the request to Lovable API
      const lovableResponse = await fetch("https://ai-support-pilot-30.lovable.app/api/public/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Webhook-Secret": secret,
        },
        body: payload,
      });

      const responseText = await lovableResponse.text();

      // 5. Send Lovable's response back to the client
      return new Response(responseText, {
        status: lovableResponse.status,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: "Internal Server Error" }), {
        status: 500,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      });
    }
  },
};
