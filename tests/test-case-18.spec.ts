// tests/login-invalid.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.navigateToHome();
  await loginPage.login('invalid', 'wrongpassword');
  
  await expect(page.getByText('Error!')).toBeVisible();
});