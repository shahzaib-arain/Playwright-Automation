//Test COREECT DETAILS FOR (FORGET MY ACOOUNT)) COULD NOT BE FOUND BY SERVER ERROR SUCCESFULY
import { test, expect } from '@playwright/test';
import { ForgetPassServerError } from '../pages/ForgetPassServerError';

test('test correct details for forgot my account - server error successful', async ({ page }) => {
  // Initialize page object
  const forgetPass = new ForgetPassServerError(page);

  // Navigate to login page
  await forgetPass.navigateToLoginPage();
  await page.waitForSelector('input[name="username"]'); // Wait for the username input to be available

  // Fill in the username and password
  await forgetPass.fillInUsername('Shahzaib');
  await forgetPass.fillInPassword('12345');
  await forgetPass.submitLogin();
  await page.waitForTimeout(2000); // Wait for login action to complete (could replace with specific wait for page element)

  // Go to the "Forgot login info" page
  await forgetPass.goToForgotPasswordPage();
  await page.waitForSelector('input[name="username"]'); // Wait for the forgot password page to load

  // Fill in personal information
  await forgetPass.fillInPersonalInfo();
  
  // Fill in the address details
  await forgetPass.fillInAddress();
  
  // Fill in the SSN
  await forgetPass.fillInSSN();

  // Submit the "Forgot password" form
  await forgetPass.submitForgotPasswordForm();
  
  // Wait for the error or confirmation response
  await page.waitForTimeout(5000); // Wait for the server's response (you can adjust or replace with specific waits)
  
  // Optional: Verify an expected error or success message after submission
  // Example:
  // const errorMessage = await page.locator('.error-message');
  // await expect(errorMessage).toHaveText('Details could not be found');
});
