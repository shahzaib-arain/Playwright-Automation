//Test  customre cARE SUCCESSFULYY WITHOUT USERNAME(NAME REQUIRED)
import { test, expect } from '@playwright/test';
import { CustomerCare } from '../pages/CustomerCare';

test('test', async ({ page }) => {
  // Initialize page object
  const customerCare = new CustomerCare(page);

  // Navigate to About page
  await customerCare.navigateToAboutPage();

  // Open the Contact Us page
  await customerCare.openContactUsPage();

  // Fill in the email, phone, and message fields
  await customerCare.fillInEmail('1324334FEHWJB');
  await customerCare.fillInPhoneNumber('94837483');
  await customerCare.fillInMessage('CLOSE THE BANK');

  // Submit the form to Customer Care
  await customerCare.submitToCustomerCare();

  await page.waitForTimeout(5000);

  
});
