//Test no 1 pass(PAGES LOADING )


 import { test, expect } from '@playwright/test';
import { ParaBankPage } from '../pages/ParaBankPage';

test('test', async ({ page }) => {
  const paraBankPage = new ParaBankPage(page);

  // Step 1: Navigate to the Home page
  await paraBankPage.navigateToHome();

  // Step 2: Click on "home" link
  await paraBankPage.clickHome();

  // Step 3: Click on "about" link
  await paraBankPage.clickAbout();

  // Step 4: Click on "contact" link
  await paraBankPage.clickContact();
  
  await page.waitForTimeout(5000);
});
