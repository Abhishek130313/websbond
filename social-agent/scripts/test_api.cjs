const https = require('https');

const token = 'EAAMh86Lus1ABRxtO48KlsmcWWCNjtGTDiqNjAdZCCU8SFYmDlSJ4FFjYrPe8ZBJr26nnArBhZASvdVG18n7GpQoRR4fko3rgp516beVMnSHr78lMXtMmg5azK9JkhM08gqKEmQ89CcmdyXt6Ddv2qJEBrDZBPZCsvdEBlBIFZAThI5q7VSobF47JhjQ2YiSSz1';
const igId = '17841421929721245';

const url = `https://graph.facebook.com/v21.0/${igId}?fields=id,name,username,followers_count,media_count,profile_picture_url&access_token=${token}`;

https.get(url, (res) => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const data = JSON.parse(d);
    if (data.error) {
      console.log('❌ API ERROR:', data.error.message);
    } else {
      console.log('✅ Instagram API is WORKING!');
      console.log('Account:', JSON.stringify(data, null, 2));
    }
  });
}).on('error', e => console.error('Network error:', e));
