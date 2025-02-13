//Test cases (without password)
import { test } from '@playwright/test';
import { LoginPage2 } from '../pages/LoginPage2';

test('Login with complex username entry', async ({ page }) => {
  const loginPage = new LoginPage2(page);

  await loginPage.navigateToLoginPage();
  await loginPage.enterUsername('Shahzaib');
  await page.waitForTimeout(2000);
  await loginPage.enterPassword('');
  await page.waitForTimeout(2000);
  await loginPage.clickLoginButton();
  await page.waitForTimeout(5000);
});
