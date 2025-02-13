//Test fail  (REGISTER wuth coreect confirm password but its reuired xip code and ssn code for login)

import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';

test('test', async ({ page }) => {
  const homePage = new RegisterPage(page);

  // Navigate to the 'About' page
  await page.goto('https://parabank.parasoft.com/parabank/about.htm');
  
  // Click on the 'Register' link
  await homePage.registerLink.click();

  // Fill out the registration form
  await homePage.fillRegistrationForm();

  // Submit the registration form
  await homePage.submitForm();

  await page.waitForTimeout(5000);

});
