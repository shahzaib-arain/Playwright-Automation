//Testcase (without usrname and password)
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigateToLoginPage() {
    await this.page.goto('https://parabank.parasoft.com/parabank/about.htm');
  }

  async clickUsernameField() {
    await this.page.locator('input[name="username"]').click();
  }

  async clickLoginButton() {
    await this.page.getByRole('button', { name: 'Log In' }).click();
  }
}
