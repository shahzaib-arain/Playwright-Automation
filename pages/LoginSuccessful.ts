import { Page } from '@playwright/test';

export class LoginSuccessful {
  constructor(private page: Page) {}

  // Navigate to the login page
  async navigateToLoginPage() {
    await this.page.goto('https://parabank.parasoft.com/parabank/about.htm');
  }

  // Enter the username with necessary CapsLock handling
  async enterUsername(username: string) {
    const usernameField = this.page.locator('input[name="username"]');
    await usernameField.click();

    // Toggle CapsLock as needed and type out the username
    for (const char of username) {
      // Check if CapsLock needs to be pressed
      if (char === char.toUpperCase()) {
        await usernameField.press('CapsLock');
      }
      await usernameField.type(char); // Use type() instead of fill() for character-by-character entry
    }

    // Reset CapsLock if it was toggled
    if (username[0] === username[0].toUpperCase()) {
      await usernameField.press('CapsLock');
    }
  }

  // Enter the password
  async enterPassword(password: string) {
    const passwordField = this.page.locator('input[name="password"]');
    await passwordField.click();

    // Fill the password without CapsLock handling (no need for CapsLock press here)
    await passwordField.fill(password);
  }

  // Click the login button
  async clickLoginButton() {
    await this.page.getByRole('button', { name: 'Log In' }).click();
  }
}
