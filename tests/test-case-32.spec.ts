// tests/logout.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Logout from application', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.navigateToHome();
  await loginPage.login('john', 'demo');
  await loginPage.logout();
  
  await expect(page.getByText('Customer Login')).toBeVisible();
});