////Test no fail (REGISTER wuth coreect confirm password but its reuired FNAME LNAME , SSN AND ADDRESS IS REQUIRED code and ssn code for login)
import { Page } from '@playwright/test';

export class Register2 {
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

  get streetField() {
    return this.page.locator('[id="customer\\.address\\.street"]');
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
    await this.streetField.click();
    await this.streetField.fill('Pechh6');
    await this.cityField.click();
    await this.cityField.fill('Karachi');
    await this.stateField.click();
    await this.stateField.fill('Karachi');
    await this.zipCodeField.click();
    await this.zipCodeField.fill('12345');
    await this.phoneNumberField.click();
    await this.phoneNumberField.fill('0834982423');
    await this.usernameField.click();
    await this.usernameField.fill('WANIAKHAN');
    await this.passwordField.click();
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
