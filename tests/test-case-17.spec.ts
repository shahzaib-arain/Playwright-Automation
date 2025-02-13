//Test  customre cARE SUCCESSFULYY WITH USERNAME
import { test, expect } from '@playwright/test';
import { CustomerCareSuccessful } from '../pages/CustomerCareSuccessful';

test('test', async ({ page }) => {
  // Initialize the page object
  const customerCare = new CustomerCareSuccessful(page);

  // Navigate to the About page
  await customerCare.navigateToAboutPage();

  // Open the Contact Us page
  await customerCare.openContactUsPage();

  // Fill the name field with the appropriate text and perform the actions on it
  await customerCare.fillNameField('S');
  await customerCare.fillNameField('Shahzaib');

  // Fill in the email, phone, and message fields
  await customerCare.fillEmailField('dnwkb23r4b');
  await customerCare.fillPhoneField('342344324');
  await customerCare.fillMessageField('close the bank');

  // Submit the form to Customer Care
  await customerCare.submitToCustomerCare();

  await page.waitForTimeout(5000);

 
});
