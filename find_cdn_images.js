async function run() {
  const query = "site:twentythreeliving.co.uk mushroom lamp";
  const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
  try {
    console.log(`Searching DuckDuckGo for: ${query}`);
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    const html = await res.text();
    // Extract links
    const regex = /href="([^"]+)"/gi;
    let match;
    const urls = [];
    while ((match = regex.exec(html)) !== null) {
      urls.push(match[1]);
    }
    console.log(`Total URLs found: ${urls.length}`);
    for (const u of [...new Set(urls)]) {
      if (u.includes("uddg=")) {
        console.log("Result URL:", decodeURIComponent(u.split("uddg=")[1].split("&")[0]));
      }
    }
  } catch (e) {
    console.error("Error:", e);
  }
}
run();
