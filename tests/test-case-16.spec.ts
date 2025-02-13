////Test customre cARE WITH USERNAME WITHOUT EMAIL AND PHONE 
import { test, expect } from '@playwright/test';
import { CustomreCare2 } from '../pages/CustomerCare2';

test('test', async ({ page }) => {
  // Initialize page object
  const customerCare = new CustomreCare2(page);

  // Navigate to About page
  await customerCare.navigateToAboutPage();

  // Open the Contact Us page
  await customerCare.openContactUsPage();

  // Fill in the name and message fields
  await customerCare.fillInName('Shahzaib');
  await customerCare.fillInMessage('CLOSE THE BANK IDIOTS');

  // Submit the form to Customer Care
  await customerCare.submitToCustomerCare();

  await page.waitForTimeout(5000);

 
});
