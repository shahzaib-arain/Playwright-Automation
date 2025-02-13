//Test pass COREECT DETAILS FOR (FORGET MY ACOOUNT)) COULD NOT BE FOUND BY SERVER ERROR SUCCESFULY
import { Page, Locator } from '@playwright/test';

export class ForgetPassServerError {
  private page: Page;
  private usernameField: Locator;
  private passwordField: Locator;
  private submitButton: Locator;
  private personalInfoField: Locator;
  private addressField: Locator;
  private ssnField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator('input[name="username"]');
    this.passwordField = page.locator('input[name="password"]');
    this.submitButton = page.locator('button[type="submit"]');
    this.personalInfoField = page.locator('input[name="personalInfo"]');
    this.addressField = page.locator('input[name="address"]');
    this.ssnField = page.locator('input[name="ssn"]');
  }

  // Navigate to the login page
  async navigateToLoginPage() {
    await this.page.goto('https://parabank.parasoft.com/parabank/login.htm');
  }

  // Fill in the username
  async fillInUsername(username: string) {
    await this.usernameField.fill(username);
  }

  // Fill in the password
  async fillInPassword(password: string) {
    await this.passwordField.fill(password);
  }

  // Submit the login form
  async submitLogin() {
    await this.submitButton.click();
  }

  // Go to the Forgot Password page
  async goToForgotPasswordPage() {
    await this.page.locator('a[href="/parabank/forgot-password.htm"]').click();
  }

  // Fill in personal information
  async fillInPersonalInfo() {
    await this.personalInfoField.fill('Some personal info');
  }

  // Fill in address information
  async fillInAddress() {
    await this.addressField.fill('Some address');
  }

  // Fill in SSN
  async fillInSSN() {
    await this.ssnField.fill('123-45-6789');
  }

  // Submit the forgot password form
  async submitForgotPasswordForm() {
    await this.page.locator('button[type="submit"]').click();
  }
}
