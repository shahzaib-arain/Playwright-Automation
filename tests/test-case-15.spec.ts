//Test  customre cARE WITH USERNAME WITHOUT message
import { test, expect } from '@playwright/test';
import { CustomerCare1 } from '../pages/CustomerCare1';

test('test', async ({ page }) => {
  // Initialize page object
  const customerCare = new CustomerCare1(page);

  // Navigate to About page
  await customerCare.navigateToAboutPage();

  // Open the Contact Us page
  await customerCare.openContactUsPage();

  // Fill in the name, email, and phone fields
  await customerCare.fillInName('Shahzaib');
  await customerCare.fillInEmail('he djhwfw');
  await customerCare.fillInPhoneNumber('2342342423');

  // Submit the form to Customer Care
  await customerCare.submitToCustomerCare();

  await page.waitForTimeout(5000);

 
});
