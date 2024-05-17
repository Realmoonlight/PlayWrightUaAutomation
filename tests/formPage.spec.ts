import { test } from "@playwright/test";

/*test.describe("FORM PAGE", () => {
  test.beforeAll(() => {
    console.log("beforeAll");
  });
  test.beforeEach(() => {
    console.log("beforeEach");
  });
  test.afterEach(() => {
    console.log("afterEach");
  });
  test.afterAll(() => {
    console.log("afterAll");
  });

  test("Test1", () => {
    console.log("test1");
  });
  test("Test2", () => {
    console.log("test2");
  });
});
*/

test.describe("FORM PAGE TYPE", () => {
    test("fill all fields", async ({page}) => {
        await page.goto("https://www.lambdatest.com/selenium-playground/input-form-demo");
        await page.locator('#name').fill('TK');
        await page.locator('[class="w-full border border-gray-90 text-size-14 rounded mt-10 px-10 py-5"][type="email"]')
        .pressSequentially("tk@yahoo.com", { delay: 500 });
        await page.locator('input[placeholder="Password"]').fill('test1234');
        await page.locator('[for="companyname"] ~ input[placeholder="Company"]').fill('LLC Happy')
        await page.selectOption('select[name="country"]', {label: 'United States'})
        await page.locator('label:has-text("City*") ~ input#inputCity').fill('Charlotte')
        await page.getByPlaceholder('Address 1').fill('777 charlotte str')
        await page.getByRole('textbox',{name:"Zip code"}).fill('28277')
        //await page.pause();
    });
  });
