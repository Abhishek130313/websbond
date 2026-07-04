/**
 * WebsBond Instagram Automation Agent (Node.js + Playwright)
 * 
 * This agent logs in to Instagram, opens a target Reel/post, checks incoming
 * comments for trigger keywords (e.g. "AUDIT"), and prints lead details.
 * It can be extended to send direct messages or post automatic replies.
 * 
 * Usage:
 *   1. Install dependencies: npm install playwright dotenv
 *   2. Add credentials to your .env file:
 *      IG_USER=websbond
 *      IG_PASS=yourpassword
 *   3. Run: node scripts/instagram_agent.js
 */

import { chromium } from 'playwright';
import dotenv from 'dotenv';

dotenv.config();

const INSTAGRAM_USERNAME = process.env.IG_USER || 'websbond';
const INSTAGRAM_PASSWORD = process.env.IG_PASS || '';
const TARGET_POST_URL = 'https://www.instagram.com/p/C_xxxxxx/'; // Replace with your target Reel URL
const TRIGGER_KEYWORD = 'AUDIT';
const LEAD_LINK = 'https://websbond.com/seo-analyzer';

async function runAgent() {
  if (!INSTAGRAM_PASSWORD) {
    console.error('[-] Error: IG_PASS environment variable is not set in .env.');
    process.exit(1);
  }

  console.log('[*] Launching browser...');
  const browser = await chromium.launch({ headless: true }); // Set to false to watch in real-time
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  try {
    // 1. Login to Instagram
    console.log('[*] Accessing Instagram Login...');
    await page.goto('https://www.instagram.com/accounts/login/');
    await page.waitForTimeout(3000);

    console.log(`[*] Entering credentials for @${INSTAGRAM_USERNAME}...`);
    await page.fill('input[name="username"]', INSTAGRAM_USERNAME);
    await page.fill('input[name="password"]', INSTAGRAM_PASSWORD);
    await page.click('button[type="submit"]');

    // Wait for navigation and dashboard
    await page.waitForNavigation({ waitUntil: 'networkidle' });
    console.log('[+] Logged in successfully!');

    // 2. Open Target Post
    console.log(`[*] Opening target post URL: ${TARGET_POST_URL}`);
    await page.goto(TARGET_POST_URL);
    await page.waitForTimeout(5000);

    // 3. Inspect Comments
    console.log(`[*] Scanning comments for keyword "${TRIGGER_KEYWORD}"...`);
    const commentSelector = 'ul[class*="comments"] li';
    const comments = await page.$$(commentSelector);
    console.log(`[+] Found ${comments.length} comments.`);

    for (const comment of comments) {
      const textEl = await comment.$('span');
      const authorEl = await comment.$('a');

      if (textEl && authorEl) {
        const text = await textEl.innerText();
        const username = await authorEl.innerText();

        if (text.toUpperCase().includes(TRIGGER_KEYWORD.toUpperCase())) {
          console.log(`[!] Lead Trigger Found! User @${username} commented: "${text}"`);
          
          // 4. Send Lead DM
          await sendDM(page, username, `Hi @${username}! Thanks for commenting. Here is your free Website Performance Audit link: ${LEAD_LINK}`);
        }
      }
    }
  } catch (error) {
    console.error('[-] Error during agent run:', error);
  } finally {
    await browser.close();
    console.log('[*] Browser closed. Run completed.');
  }
}

async function sendDM(page, targetUsername, message) {
  console.log(`[*] Navigating to send direct message to @${targetUsername}...`);
  await page.goto('https://www.instagram.com/direct/new/');
  await page.waitForTimeout(3000);

  // Search for the user
  await page.fill('input[name="queryBox"]', targetUsername);
  await page.waitForTimeout(2000);
  
  // Select first match and click Next
  await page.click(`span:has-text("${targetUsername}")`);
  await page.waitForTimeout(1000);
  await page.click('div:has-text("Next")');
  await page.waitForTimeout(3000);

  // Type and send message
  await page.fill('textarea[placeholder="Message..."]', message);
  await page.press('textarea[placeholder="Message..."]', 'Enter');
  console.log(`[+] DM successfully sent to @${targetUsername}!`);
}

runAgent().catch(console.error);
