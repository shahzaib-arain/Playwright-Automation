//Test case (without usrname and password)
import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToLoginPage();
  await loginPage.clickUsernameField();
  await loginPage.clickLoginButton();
  await page.waitForTimeout(5000);
});
