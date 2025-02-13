//Testcase (Username already exist)
import { test, expect } from '@playwright/test';
import { ForgetPass } from '../pages/ForgetPass';

test('Register a new user', async ({ page }) => {
  const forgetPass = new ForgetPass(page);

  // Step 1: Navigate to the Register page
  await forgetPass.navigateToRegisterPage();

  // Step 2: Fill out the registration form
  await forgetPass.fillFirstName('Shahzaib');
  await forgetPass.fillLastName('Khan');
  await forgetPass.fillAddress('PECHS 6', 'KARACHI', 'KARACHI', '12345');
  await forgetPass.fillPhoneAndSSN('9234824', '1234');
  await forgetPass.fillUsernameAndPassword('Shahzaib', '12345');
  await forgetPass.fillRepeatedPassword('12345');


  // Step 3: Click the Register button
  await forgetPass.clickRegisterButton();

  await page.waitForTimeout(5000);


});
