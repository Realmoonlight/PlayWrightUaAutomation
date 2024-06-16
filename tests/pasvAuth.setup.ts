import { test as setup1, expect } from '@playwright/test';

const authFile = './.auth/userPASV.json';

setup1('authenticate', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://coding.pasv.us');
  await page.locator('.me-4').click()
  await page.getByPlaceholder("Email").fill('realmoonlight83@yahoo.com');
  await page.locator('#normal_login_password').fill('Dylan2010');
  await page.getByRole('button', { name: 'Login' }).click();
  // Wait until the page receives the cookies.
  await page.locator('a[href="/flash"]').click();
  
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://coding.pasv.us/flash');
  await page.screenshot({path: 'screen/authentication.png'})
  await page.locator('h1:has-text("Interview practice cards")').click();
  await page.context().storageState({ path: authFile });
  // Alternatively, you can wait until the page reaches a state where all cookies are set.
//   await expect(page.locator('#userName-value')).toHaveText('TK');

  // End of authentication steps.

 
});