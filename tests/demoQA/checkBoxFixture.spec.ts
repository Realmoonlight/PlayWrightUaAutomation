// import { CheckBox } from "../../page_object/demoQA/CheckBox";
import { expect } from "@playwright/test";
import { test } from "../../page_object/demoQA/checkBoxFixt"

test ("checkbox fixture", async ({page, checkBox}) => {
    await checkBox.checkAll();
    await expect(page.locator(checkBox.checkedBox).nth(0)).toBeChecked()
})