import { test } from "@playwright/test";

test.describe("FORM PAGE TYPE", () => {
    test("fill all fields", async ({page}) => {
        await page.goto('http://localhost:4200/pages/forms/layouts');
        await page.locator('[class = "input-full-width size-medium status-basic shape-rectangle nb-transition"][placeholder="Jane Doe"]')
        .fill('Tania');
        await page.locator('[class = "input-full-width size-medium status-basic shape-rectangle nb-transition"][placeholder="Email"][type="text"]')
        .fill('TK@yahoo.com');
        // await page.getByText('Submit').click();
        await page.getByLabel('XL').check();
})
});