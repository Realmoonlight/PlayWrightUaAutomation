import { test as it } from "@playwright/test";

it.describe("FORM LAYOUTS", () => {
    it.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:4200/pages/forms/layouts');
    });

    it("Inline form", async ({ page }) => {
        await page.locator('[placeholder="Jane Doe"]').fill("Tania");
        await page.locator('[placeholder="Jane Doe"] ~ input[placeholder="Email"]').fill("TK@yahoo.com");
        await page.locator('.custom-checkbox').nth(0).check();
        await page.locator('.appearance-filled.size-medium.shape-rectangle.status-primary.nb-transition').nth(0).click();
        // page.pause() slow on each test
    });
    it("Using the Grid", async ({page}) => {
        await page.locator('[placeholder="Email"]').nth(1).fill('TK@yahoo.com');
        await page.locator('[id="inputPassword2"]').fill('123456');
        await page.locator('[class="inner-circle"]').nth(0).check();
        await page.locator('[class="inner-circle"]').nth(1).check();
        await page.locator('[status = primary]').nth(2).click()
    });
    it("Form without labels", async({ page}) =>{
        await page.locator('[placeholder="Recipients"]').fill('TK');
        await page.locator('[placeholder="Subject"]').fill('Working hard');
        await page.locator('[placeholder="Message"]').fill('any text');
        await page.locator('[status = "success"]').click()
    });
    it("Basic form", async({ page }) =>{
        await page.locator('[placeholder="Email"]').nth(2).fill('TK@yahoo.com');
        await page.locator('[id="exampleInputPassword1"]').fill('123456');
        await page.locator('.custom-checkbox').nth(1).check();
        await page.locator('[status = "danger"]').click()
    });
    it("Block form",async ({page}) => {
       await page.locator('[placeholder = "First Name"]').fill('Tetiana');
       await page.locator('[placeholder = "Last Name"]').fill('Krasnova');
       await page.locator('[placeholder="Email"]').nth(2).fill('TK@yahoo.com');
       await page.locator('[id="inputWebsite"]').fill('http://localhost:4200');
       await page.locator('[class="appearance-filled size-medium shape-rectangle status-basic nb-transition"]').click();
    })
    it("Horizontal form",async ({page}) => {
        await page.locator('[placeholder="Email"]').nth(3).fill('TK@yahoo.com');
        await page.locator('[id="inputPassword3"]').fill('123456');
        await page.locator('[class="custom-checkbox"]').nth(2).click();
        await page.locator('[status="warning"]').click()
    })
});

