import { expect, test as setup1} from '@playwright/test';

setup1.beforeEach(async({page})=>{
    await page.goto('https://coding.pasv.us')
})
setup1('authentication through UI', async({page, browserName}) =>{
    const name = page.locator('[class="ant-btn ant-btn-primary ant-btn-lg login-form-button w-100"]')
    // await expect (name).toHaveText('Login')
    await page.screenshot({path: `screenshot/${browserName}.png`})
})