import { test } from "@playwright/test";

test("addBlocker", async ({ page }) => {
  const addBlocker = [
    "https://www.apple.com",
    "https://is1-ssl.mzstatic.com",
    "https://securemetrics.apple.com",
    "chrome-extension://cofdbpoegempjloogbagkncekinflcnj",
    "https://securemvt.apple.com"
  ];
  await page.route("**/*", (route) => {
    const url = route.request().url();
    if (addBlocker.some((block) => url.startsWith(block))) route.abort();
    else route.continue();
  });
  await page.pause();
  await page.goto("http://www.apple.com");
  await page.pause();
});
