//Test  pass (Username and correct pass )
import { test } from '@playwright/test';
import { LoginSuccessful } from '../pages/LoginSuccessful';

test('Login with valid username and password', async ({ page }) => {
  const loginPage = new LoginSuccessful(page);

  // Step 1: Navigate to the login page
  await loginPage.navigateToLoginPage();

  // Step 2: Enter the username with CapsLock handling
  await loginPage.enterUsername('Shahzaib');

  // Step 3: Enter the password
  await loginPage.enterPassword('12345');

  // Step 4: Click the login button
  await loginPage.clickLoginButton();
  
  await page.waitForTimeout(5000);
});
