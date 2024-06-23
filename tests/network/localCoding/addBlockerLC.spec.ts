import { test } from "@playwright/test";

test("addBlocker", async ({ page }) => {
  const addBlocker = [
    "https://fonts.googleapis.com",
    "https://www.googletagmanager.com",
    "https://fonts.gstatic.com",
    "https://mc.yandex.ru",
    "https://server-prod.pasv.us",
    "chrome-extension://cofdbpoegempjloogbagkncekinflcnj",
    "https://mc.yandex.com",
    "https://course-qa-basics.s3.us-west-1.amazonaws.com",
    "https://code.jivosite.com",
    "https://node-sber1-az3-20.jivosite.com",
    "https://www.google-analytics.com",
    "https://code.jivo.ru",
    "https://telemetry.jivosite.com"
  ];
  await page.route("**/*", (route) => {
    const url = route.request().url();
    if (addBlocker.some((block) => url.startsWith(block))) route.abort();
    else route.continue();
  });
  await page.pause();
  await page.goto("https://coding.pasv.us/'");
  await page.pause();
});
