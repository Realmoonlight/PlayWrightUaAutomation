import {test as it} from '@playwright/test';

it('Testing Broken images', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/broken_images');
    await page.route('**/*', route =>{
        route.continue().catch(() => {})

    })
    const image = page.evaluate(async () => {
        const brokenImages = Array.from(document.querySelectorAll('img'))
        const arrayOfImages = []

        for (const img of brokenImages) {
            const response = await fetch(img.src).catch(() => null)
            if (!response || response.status !== 200 || img.naturalWidth === 0 || img.naturalHeight === 0) {
                arrayOfImages.push(img.src)
            }
        }
        return arrayOfImages
        // throw new Error('Error')
    })
    console.log((await image).length)
    for (const src of await image) {
        console.log(src, 'src')
    }
})