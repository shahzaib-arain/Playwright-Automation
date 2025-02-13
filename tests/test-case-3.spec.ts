//Test no fail (REGISTER wuth coreect confirm password but its reuired FNAME LNAME , SSN AND ADDRESS IS REQUIRED code and ssn code for login)
import { test, expect } from '@playwright/test';
import { Register2 } from '../pages/Register2';

test('test', async ({ page }) => {
  const registerPage = new Register2(page);

  // Navigate to the 'About' page
  await page.goto('https://parabank.parasoft.com/parabank/about.htm');
  
  // Click on the 'Register' link
  await registerPage.clickRegisterLink();

  // Fill in the registration form
  await registerPage.fillRegistrationForm();

  // Submit the registration form
  await registerPage.submitForm();

  await page.waitForTimeout(5000);

});
