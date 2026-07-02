const url = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https%3A%2F%2Fgoogle.com&category=SEO&category=PERFORMANCE";

fetch(url)
  .then(res => res.json().then(data => ({status: res.status, data})))
  .then(res => {
    if (res.status !== 200) console.log("ERROR:", res.data.error.message);
    else console.log("SUCCESS!");
  })
  .catch(console.error);
