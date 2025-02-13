import { Page } from '@playwright/test';

export class LoginPage3 {
  constructor(private page: Page) {}

  // Navigate to the login page
  async navigateToLoginPage() {
    await this.page.goto('https://parabank.parasoft.com/parabank/about.htm');
  }

  // Enter the password (no CapsLock handling needed for passwords)
  async enterPassword(password: string) {
    const passwordField = this.page.locator('input[name="password"]');
    await passwordField.click(); // Focus on the password field
    await passwordField.fill(password); // Fill password
  }

  // Enter the username with CapsLock handling
  async enterUsername(username: string) {
    const usernameField = this.page.locator('input[name="username"]');
    await usernameField.click(); // Focus on the username field

    // Loop through each character of the username to handle CapsLock
    for (const char of username) {
      if (char === char.toUpperCase()) {
        await usernameField.press('CapsLock'); // Toggle CapsLock for uppercase letters
      }
      await usernameField.type(char); // Type each character
    }

    // Reset CapsLock state after typing the username
    if (username[0] === username[0].toUpperCase()) {
      await usernameField.press('CapsLock'); // Ensure CapsLock is off
    }
  }

  // Click the login button
  async clickLoginButton() {
    await this.page.getByRole('button', { name: 'Log In' }).click();
  }
}
