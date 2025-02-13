//Test case COREECT DETAILS FOR (FORGET MY ACOOUNT))FIND SUCCESFULY
import { test, expect } from '@playwright/test';
import { ForgetPass2 } from '../pages/ForgetPassSuccessful';

test('test', async ({ page }) => {
  // Initialize page object
  const forgetPass = new ForgetPass2(page);

  // Navigate to the "Forgot login info" page
  await forgetPass.goToForgotPasswordPage();

  // Fill in the personal information
  await forgetPass.fillInPersonalInfo();

  // Fill in the address
  await forgetPass.fillInAddress();

  // Fill in SSN
  await forgetPass.fillInSSN();

  // Submit the form
  await forgetPass.submitForm();

  await page.waitForTimeout(5000);

  
});
