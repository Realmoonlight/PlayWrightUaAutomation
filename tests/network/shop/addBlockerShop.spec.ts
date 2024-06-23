import { test } from "@playwright/test";

test("addBlocker", async ({ page }) => {
  const addBlocker = [
   "https://pixel.wp.com",
   "chrome-extension://cofdbpoegempjloogbagkncekinflcnj",
   "https://i0.wp.com",
   "https://stats.wp.com",
   "ttps://fonts.gstatic.com",
   "https://zakrademos.com",
  ];
  await page.route("**/*", (route) => {
    const url = route.request().url();
    if (addBlocker.some((block) => url.startsWith(block))) route.abort();
    else route.continue();
  });
  await page.pause();
  await page.goto("https://practice.sdetunicorns.com/shop/");
  await page.pause();
});
