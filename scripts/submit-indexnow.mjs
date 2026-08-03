#!/usr/bin/env node
/**
 * Submit site URLs to IndexNow (Bing / Yandex / etc.).
 * Usage: node scripts/submit-indexnow.mjs
 * Optional: node scripts/submit-indexnow.mjs https://warninglightfinder.com/symbols/abs-warning-light/
 */

const HOST = "warninglightfinder.com";
const KEY = "2458ed4057e44248b8c2d8321a501b01";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function urlsFromSitemap() {
  const res = await fetch(`https://${HOST}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (!urls.length) throw new Error("no URLs in sitemap");
  return urls;
}

async function submit(urlList) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList
  };

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body)
  });

  const text = await res.text();
  console.log(`IndexNow status: ${res.status}`);
  if (text) console.log(text);
  // 200 / 202 are success (202 = accepted, key may still be verifying)
  if (res.status !== 200 && res.status !== 202) {
    process.exitCode = 1;
  }
}

const argUrls = process.argv.slice(2).filter((u) => u.startsWith("http"));
const urlList = argUrls.length ? argUrls : await urlsFromSitemap();
console.log(`Submitting ${urlList.length} URL(s)…`);
await submit(urlList);
