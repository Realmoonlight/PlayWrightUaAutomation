import { test as it } from "@playwright/test";
import {Form} from "../../page_object/LetCodeIn/Form";
it.describe("FORMS FROM LETCODE", () => {
    it.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/forms');
    });
    it('Basic forms', async({page}) =>{
        let form = new Form(page);
        await form.interactWithDropDown()

        
    })
});