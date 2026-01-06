// tests/color-contrast.spec.ts
import { test, expect } from '@playwright/test';

test('Basic color contrast check', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  
  // Check that text is not the same color as background
  const loginText = page.getByText('Customer Login');
  const textColor = await loginText.evaluate(element => {
    return window.getComputedStyle(element).color;
  });
  
  const backgroundColor = await loginText.evaluate(element => {
    return window.getComputedStyle(element).backgroundColor;
  });
  
  // Simple check: text color should not equal background color
  expect(textColor).not.toBe(backgroundColor);
  
  // Check buttons have visible text
  const loginButton = page.getByRole('button', { name: 'Log In' });
  const buttonTextColor = await loginButton.evaluate(element => {
    return window.getComputedStyle(element).color;
  });
  
  const buttonBgColor = await loginButton.evaluate(element => {
    return window.getComputedStyle(element).backgroundColor;
  });
  
  expect(buttonTextColor).not.toBe(buttonBgColor);
});