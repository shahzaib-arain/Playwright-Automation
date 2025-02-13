//Test   (REGISTER with correct confirm password and all credential data but its required  ADDRESS ) 
import { test, expect } from '@playwright/test';
import { Register3 } from '../pages/Register3';

test('test', async ({ page }) => {
  const registerPage = new Register3(page);

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
