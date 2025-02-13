//Test (REGISTER wuth coreect confirm password and all credential data but its reuired  ADDRESS )

import { Page } from '@playwright/test';

export class Register3 {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators for the form fields
  get registerLink() {
    return this.page.locator('role=link[name="Register"]');
  }

  get firstNameField() {
    return this.page.locator('[id="customer\\.firstName"]');
  }

  get lastNameField() {
    return this.page.locator('[id="customer\\.lastName"]');
  }

  get cityField() {
    return this.page.locator('[id="customer\\.address\\.city"]');
  }

  get stateField() {
    return this.page.locator('[id="customer\\.address\\.state"]');
  }

  get zipCodeField() {
    return this.page.locator('[id="customer\\.address\\.zipCode"]');
  }

  get phoneNumberField() {
    return this.page.locator('[id="customer\\.phoneNumber"]');
  }

  get ssnField() {
    return this.page.locator('[id="customer\\.ssn"]');
  }

  get usernameField() {
    return this.page.locator('[id="customer\\.username"]');
  }

  get passwordField() {
    return this.page.locator('[id="customer\\.password"]');
  }

  get repeatedPasswordField() {
    return this.page.locator('#repeatedPassword');
  }

  get submitButton() {
    return this.page.locator('role=button[name="Register"]');
  }

  // Method to fill in the registration form
  async fillRegistrationForm() {
    await this.firstNameField.click();
    await this.firstNameField.fill('WaniaKhan');
    await this.lastNameField.click();
    await this.lastNameField.fill('Khan');
    await this.cityField.click();
    await this.cityField.fill('Karachi');
    await this.stateField.click();
    await this.stateField.fill('Karachi');
    await this.zipCodeField.click();
    await this.zipCodeField.fill('12345');
    await this.phoneNumberField.click();
    await this.phoneNumberField.fill('983474234');
    await this.ssnField.click();
    await this.ssnField.fill('12345');
    await this.usernameField.click();
    await this.usernameField.fill('WaniaKhan');
    await this.passwordField.fill('12345');
    await this.repeatedPasswordField.click();
    await this.repeatedPasswordField.fill('12345');
  }

  // Method to click the 'Register' button
  async submitForm() {
    await this.submitButton.click();
  }

  // Method to click the 'Register' link
  async clickRegisterLink() {
    await this.registerLink.click();
  }
}
