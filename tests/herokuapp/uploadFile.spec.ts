import {expect, test as it } from '@playwright/test';

it('upload single file', async ({ page }) => {
    await page.goto ('https://the-internet.herokuapp.com/upload');
    await page.setInputFiles('input[type="file"]', 'upload/1img.png');
    await page.click('input[type="submit"]');
    await expect(page.locator('#uploaded-files')).toContainText('1img.png')
})
it('upload multipel file', async ({ page }) => {
    await page.goto ('https://blueimp.github.io/jQuery-File-Upload/');
    await page.setInputFiles('input[type="file"]', ['upload/1img.png', 'upload/2img.png', 'upload/3img.png']);
    const name = await page.locator ('p.name').allTextContents();
    console.log(name);
    expect(name).toEqual(['1img.png', '2img.png', '3img.png']);
    // await expect(page.locator('p.name')).toContainText('1img.png')
    // await expect(page.locator('p.name')).toContainText('2img.png')
    // await expect(page.locator('p.name')).toContainText('3img.png')
})
