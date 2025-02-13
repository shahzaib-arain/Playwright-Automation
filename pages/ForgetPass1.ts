//Test case INCOREECT DETAILS FOR (FORGET MY ACOOUNT))
import { Page } from '@playwright/test';

export class ForgetPass1 {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Elements
  private get firstNameField() {
    return this.page.locator('#firstName');
  }

  private get lastNameField() {
    return this.page.locator('#lastName');
  }

  private get streetField() {
    return this.page.locator('[id="address\\.street"]');
  }

  private get cityField() {
    return this.page.locator('[id="address\\.city"]');
  }

  private get stateField() {
    return this.page.locator('[id="address\\.state"]');
  }

  private get zipCodeField() {
    return this.page.locator('[id="address\\.zipCode"]');
  }

  private get ssnField() {
    return this.page.locator('#ssn');
  }

  private get findLoginInfoButton() {
    return this.page.getByRole('button', { name: 'Find My Login Info' });
  }

  // Actions
  async goToForgotPasswordPage() {
    await this.page.goto('https://parabank.parasoft.com/parabank/about.htm');
    await this.page.getByRole('link', { name: 'Forgot login info?' }).click();
  }

  async fillInPersonalInfo() {
    await this.firstNameField.click();
    await this.firstNameField.press('CapsLock');
    await this.firstNameField.fill('Wania');

    await this.lastNameField.click();
    await this.lastNameField.press('CapsLock');
    await this.lastNameField.fill('Khan');
  }

  async fillInAddress() {
    await this.streetField.click();
    await this.streetField.fill('PECHS 6');

    await this.cityField.click();
    await this.cityField.fill('KARACH');

    await this.stateField.click();
    await this.stateField.fill('KARACHI');

    await this.zipCodeField.click();
    await this.zipCodeField.fill('1234');
  }

  async fillInSSN() {
    await this.ssnField.click();
    await this.ssnField.fill('1234');
  }

  async submitForm() {
    await this.findLoginInfoButton.click();
  }
}
