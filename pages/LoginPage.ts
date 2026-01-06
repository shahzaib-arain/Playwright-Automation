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
  private get usernameField() {
    return this.page.locator('input[name="username"]');
  }

  private get passwordField() {
    return this.page.locator('input[name="password"]');
  }

  private get loginButton() {
    return this.page.locator('input[value="Log In"]');
  }

  private get logoutLink() {
    return this.page.getByText('Log Out');
  }

  async navigateToHome() {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  }

  async login(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  async logout() {
    await this.logoutLink.click();
  }
  
}
