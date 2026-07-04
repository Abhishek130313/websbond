// Cloudflare Workers AI + Instagram Graph API integration layer
// Uses OpenAI-compatible endpoint for maximum flexibility

const IG_GRAPH_BASE = "https://graph.facebook.com/v21.0";

// ── Helper: Call Cloudflare Workers AI ───────────────────
async function callCFAI(apiToken, accountId, systemPrompt, userPrompt) {
  // Use the OpenAI-compatible chat completions endpoint
  const url = `/cf-api/client/v4/accounts/${accountId}/ai/v1/chat/completions`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
    body: JSON.stringify({
      model: "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.8,
      max_tokens: 2000,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    const msg = err.errors?.[0]?.message || err.error?.message || `Cloudflare AI error (${res.status})`;
    throw new Error(msg);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content || data.result?.response || "";
}

// ── Get API credentials from localStorage ────────────────
function getCFCredentials() {
  const apiToken = localStorage.getItem("wb_cf_token") || "";
  const accountId = localStorage.getItem("wb_cf_account_id") || "";
  return { apiToken, accountId };
}

// ── Cloudflare AI: Generate Reel Ideas ──────────────────
export async function generateReelIdeas(apiKey, niche = "web design agency India", count = 3) {
  const { apiToken, accountId } = getCFCredentials();
  const token = apiToken || apiKey; // Support both direct key and stored key

  if (!token || !accountId) {
    throw new Error("Add Cloudflare API Token & Account ID in Settings");
  }

  const systemPrompt = `You are a top Instagram growth strategist for a ${niche} called WebsBond. 
  You act as an Autonomous Social Media Manager. Analyze current trends in the digital space and create a highly actionable viral content plan.
  Reels must be:
  - 15 seconds max (High Retention)
  - 3-second visual text hook
  - End with a comment trigger CTA (e.g. "Comment SEO")`;

  const userPrompt = `Give me ${count} Instagram Reel trend plans for today. For each plan return JSON with:
  - title: Short punchy title
  - trend_reason: 1 sentence explaining why this specific topic/format is trending right now
  - hook: First 3-second text on screen (must be curiosity inducing)
  - script: 4-step short script/visuals outline
  - caption: Full Instagram caption (include value + the comment CTA)
  - hashtags: Array of 5 highly targeted hashtags
  - type: One of [educational, transformation, humor, case_study, resource]
  
  Return ONLY a valid JSON array, no markdown formatting.`;

  const content = await callCFAI(token, accountId, systemPrompt, userPrompt);

  const jsonMatch = content.match(/\[[\s\S]*\]/);
  if (!jsonMatch) throw new Error("Could not parse AI response");
  return JSON.parse(jsonMatch[0]);
}

// ── Cloudflare AI: Generate Caption ─────────────────────
export async function generateCaption(apiKey, topic, reelType = "educational", hashtags = []) {
  const { apiToken, accountId } = getCFCredentials();
  const token = apiToken || apiKey;

  if (!token || !accountId) {
    throw new Error("Add Cloudflare API Token & Account ID in Settings");
  }

  const systemPrompt = `You write Instagram captions for WebsBond, a web design & SEO agency in Delhi, India. 
  Captions must be punchy, conversational (mix Hindi-English is OK), lead-generating, and end with a comment trigger CTA.`;

  const userPrompt = `Write an Instagram caption for a ${reelType} Reel about: "${topic}"
  
  Rules:
  - First line = strong hook (no hashtags)
  - Body = 2-3 short lines of value
  - End with: Comment [KEYWORD] for [something free]
  - Then add these hashtags: ${hashtags.join(" ")}
  
  Keep total length under 300 characters for the caption part (excluding hashtags).`;

  return await callCFAI(token, accountId, systemPrompt, userPrompt);
}

// ── Cloudflare AI: Generate Comment Reply ───────────────
export async function generateCommentReply(apiKey, comment, postContext = "") {
  const { apiToken, accountId } = getCFCredentials();
  const token = apiToken || apiKey;

  if (!token || !accountId) {
    throw new Error("Add Cloudflare API Token & Account ID in Settings");
  }

  const systemPrompt = `You reply to Instagram comments for WebsBond, a web design & SEO agency in Delhi.
  Replies must be:
  - Friendly and professional
  - Short (1-2 lines max)
  - End with a question OR a CTA to visit the link or DM
  - Conversational tone (Hindi-English mix is fine)
  - Never sound like a bot`;

  const userPrompt = `Post context: "${postContext}"
  Comment received: "${comment}"
  
  Write 3 different reply options as a JSON array with "reply" key. Keep each under 100 chars.
  Return ONLY valid JSON array.`;

  const content = await callCFAI(token, accountId, systemPrompt, userPrompt);
  const jsonMatch = content.match(/\[[\s\S]*\]/);
  if (!jsonMatch) return [{ reply: content }];
  return JSON.parse(jsonMatch[0]);
}

// ── Cloudflare AI: Test API Connection ──────────────────
export async function testCFConnection(apiToken, accountId) {
  const url = `/cf-api/client/v4/accounts/${accountId}/ai/models/search`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${apiToken}` },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.errors?.[0]?.message || "Invalid API Token or Account ID");
  }
  return true;
}

// ── Instagram Graph API: Get Account Stats ───────────────
export async function getIGAccountStats(accessToken, igUserId) {
  const fields = "followers_count,media_count,profile_picture_url,biography,website,name";
  const res = await fetch(
    `${IG_GRAPH_BASE}/${igUserId}?fields=${fields}&access_token=${accessToken}`
  );
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error?.message || "Instagram API error");
  }
  return res.json();
}

// ── Instagram Graph API: Get Insights (Reach, Impressions) ──
export async function getIGInsights(accessToken, igUserId, period = "day") {
  const metrics = "reach,follower_count,profile_views";
  const res = await fetch(
    `${IG_GRAPH_BASE}/${igUserId}/insights?metric=${metrics}&period=${period}&access_token=${accessToken}`
  );
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error?.message || "Instagram Insights API error");
  }
  return res.json();
}

// ── Instagram Graph API: Get Recent Posts ────────────────
export async function getIGRecentPosts(accessToken, igUserId, limit = 10) {
  const fields = "id,caption,media_type,media_url,thumbnail_url,timestamp,like_count,comments_count";
  const res = await fetch(
    `${IG_GRAPH_BASE}/${igUserId}/media?fields=${fields}&limit=${limit}&access_token=${accessToken}`
  );
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error?.message || "Instagram Media API error");
  }
  return res.json();
}

// ── Instagram Graph API: Get Post Insights ────────────────
export async function getPostInsights(accessToken, mediaId) {
  const metrics = "reach,impressions,likes,comments,shares,saved,video_views";
  const res = await fetch(
    `${IG_GRAPH_BASE}/${mediaId}/insights?metric=${metrics}&access_token=${accessToken}`
  );
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error?.message || "Post Insights API error");
  }
  return res.json();
}
