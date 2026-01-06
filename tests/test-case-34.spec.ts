// tests/admin-access.spec.ts
import { test, expect } from '@playwright/test';
import { AdminPage } from '../pages/AdminPage';

test('Access admin page and initialize database', async ({ page }) => {
  const adminPage = new AdminPage(page);
  
  await adminPage.navigate();
  await adminPage.initializeDatabase();
  
  await expect(page.getByText('Database initialized')).toBeVisible();
});