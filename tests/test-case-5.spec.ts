//Test  pass (REGISTER wuth coreect confirm password and all credential without given phone no but its work and created my account)account successfuly created

import { test } from '@playwright/test';
import { Register4 } from '../pages/Register4';

test('Register a new user', async ({ page }) => {
  const registerPage = new Register4(page);

  await registerPage.navigateToRegisterPage();
  await registerPage.fillFirstName('Shahzaib');
  await registerPage.fillLastName('Khan');
  await registerPage.fillAddress('PECHS 6', 'KARACHI', 'KARACHI', '12345');
  await registerPage.fillPhoneNumber('1234567890'); // Ensure a valid phone number
  await registerPage.fillSSN('12345');
  await registerPage.fillUsername('Shahzaib');
  await registerPage.fillPassword('12345');
  await registerPage.submitRegistration();
  await page.waitForTimeout(5000);
});
