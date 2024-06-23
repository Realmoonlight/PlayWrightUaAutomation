import { test } from "@playwright/test";

test("pageError", async ({ page }) => {
  await page.route("**/*.{png, jpg,jpeg, svg}", (body) => {
    if (body.request().resourceType() === "image") {
      body.abort();
    } else {
      body.continue();
    }
    // console.log(request, 'request')
  });
  page.on("pageerror", (error) => {
    console.log(`error: ${error}`);
  });
  // await page.goto('data:text/html, <script>throw new Error("Test")</script>')
  await page.goto("https://www.apple.com/");
});
