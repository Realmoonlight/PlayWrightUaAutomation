import { test as it } from "@playwright/test";
import { DatePicker } from "../../page_object/LamberTest/DatePicker";
it.describe("DATE PICKER demoQA", () => {
  it("working with date picker for demoQA", async ({ page }) => {
    // const browser: Browser = await chromium.launch({headless: false});
    // const context = await browser.newContext();
    // const page: Page = await context.newPage();         syntaxis befor update for {page}
    let datePicker = new DatePicker(page);
    await page.goto("https://demoqa.com/date-picker");
    await datePicker.verifyHeader();
  });
});
