import https from 'https';

const APP_ID = '881755224453968';
const APP_SECRET = '896016634ae65ed8070a95e7e46f354f';
const SHORT_TOKEN = 'EAAMh86Lus1ABR9tuXpxFJx6DwlXnkGVsHiKU4eoakdkAcek3VBH96iWFZCiKUm5WZBr9UMFV1OqEdCc5nt3SPsjhEfLUKl2cQ4B2Ot2KadTnTLQZBng2L9pA9MaelFWbVjZCpIvyDiRdTP5kiNSbLMd9Y8OU0a0eGV52yIeZCGOSd3SA71XvpBwk5SsnDB4iNZBxr5OcH48cqnA4y9XKG4cZAHoKtmzMm0hJqvqZAsGIz7an7TKErhZAbzbBwCrKKsPXNveZAXXzIOXtiOCdUvKIDv';

function getJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function run() {
  try {
    console.log('1. Exchanging short-lived token for long-lived 60-day token...');
    const exchangeUrl = `https://graph.facebook.com/v21.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${APP_ID}&client_secret=${APP_SECRET}&fb_exchange_token=${SHORT_TOKEN}`;
    const tokenResult = await getJson(exchangeUrl);
    
    if (tokenResult.error) {
      throw new Error(`Token Exchange Error: ${tokenResult.error.message}`);
    }
    
    const longToken = tokenResult.access_token;
    console.log('\n[SUCCESS] Long-Lived Token obtained:');
    console.log(longToken);
    
    console.log('\n2. Fetching connected Facebook Pages...');
    const pagesUrl = `https://graph.facebook.com/v21.0/me/accounts?access_token=${longToken}`;
    const pagesResult = await getJson(pagesUrl);
    
    if (pagesResult.error) {
      throw new Error(`Pages Fetch Error: ${pagesResult.error.message}`);
    }
    
    const pages = pagesResult.data || [];
    if (pages.length === 0) {
      throw new Error('No Facebook Pages found. Check if the page is connected to this Facebook user and authorized in the popup.');
    }
    
    console.log(`Found ${pages.length} page(s). Checking for linked Instagram Business account...`);
    
    for (const page of pages) {
      console.log(`\nChecking page: ${page.name} (ID: ${page.id})...`);
      const igUrl = `https://graph.facebook.com/v21.0/${page.id}?fields=instagram_business_account&access_token=${longToken}`;
      const igResult = await getJson(igUrl);
      
      if (igResult.instagram_business_account) {
        const igId = igResult.instagram_business_account.id;
        console.log(`\n🎉 Found Instagram Business Account linked to "${page.name}":`);
        console.log(`Instagram ID: ${igId}`);
        console.log('\n========================================');
        console.log('RESULTS FOR DASHBOARD:');
        console.log(`Token: ${longToken}`);
        console.log(`Instagram ID: ${igId}`);
        console.log('========================================');
        return;
      }
    }
    
    throw new Error('No Instagram Business Account linked to your authorized Facebook Pages.');
  } catch (e) {
    console.error('\n❌ ERROR:', e.message);
  }
}

run();
