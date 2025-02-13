//Test no 10 pass (without username)
import { test } from '@playwright/test';
import { LoginPage3 } from '../pages/LoginPage3';

test('Login with password first and then username', async ({ page }) => {
  const loginPage = new LoginPage3(page);

  await loginPage.navigateToLoginPage();
  await loginPage.enterPassword('12345');
  await page.waitForTimeout(2000);
  await loginPage.enterUsername('');
  await loginPage.clickLoginButton();
  await page.waitForTimeout(5000);
});
