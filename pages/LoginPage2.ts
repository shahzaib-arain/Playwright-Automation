import { Page } from '@playwright/test';

export class LoginPage2 {
  constructor(private page: Page) {}

  // Navigate to the login page
  async navigateToLoginPage() {
    await this.page.goto('https://parabank.parasoft.com/parabank/about.htm');
  }

  // Enter the username with necessary CapsLock handling
  async enterUsername(username: string) {
    const usernameField = this.page.locator('input[name="username"]');
    await usernameField.click(); // Focus on the username field

    // Loop through each character and type it while handling CapsLock
    for (const char of username) {
      if (char === char.toUpperCase()) {
        await usernameField.press('CapsLock'); // Toggle CapsLock for uppercase characters
      }
      await usernameField.type(char); // Type the character instead of filling it
    }

    // Reset CapsLock state after typing
    if (username[0] === username[0].toUpperCase()) {
      await usernameField.press('CapsLock'); // Ensure CapsLock is turned off
    }
  }

  // Enter the password (without CapsLock handling)
  async enterPassword(password: string) {
    const passwordField = this.page.locator('input[name="password"]');
    await passwordField.click(); // Focus on the password field
    await passwordField.fill(password); // Use fill() for passwords, as no CapsLock handling is needed
  }

  // Click the login button
  async clickLoginButton() {
    await this.page.getByRole('button', { name: 'Log In' }).click();
  }
}
