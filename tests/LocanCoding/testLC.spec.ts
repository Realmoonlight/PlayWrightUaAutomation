import { expect, test } from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://coding.pasv.us')
})
test('authentication through UI', async({page, browserName}) =>{
    const name = page.locator('[class="ant-btn ant-btn-primary ant-btn-lg login-form-button w-100"]')
    await expect (name).toHaveText('Login')
    await page.screenshot({path: `screenshot/${browserName}.png`})
})