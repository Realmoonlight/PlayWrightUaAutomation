import {test} from '@playwright/test'


test('intercept', async ({page}) => {
    await page.route('**\/*.{png, jpg,jpeg, svg}', (body) => {
        if(body.request().resourceType()==='image'){
            body.abort()
        } else {
            body.continue()
        }
        // console.log(request, 'request')
    })
    await page.goto('https://www.apple.com/')
})