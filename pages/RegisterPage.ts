////Test fail  (REGISTER wuth coreect confirm password but its reuired xip code and ssn code for login)
import { Page } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locator for the 'Register' link
  get registerLink() {
    return this.page.locator('role=link[name="Register"]');
  }

  // Locators for form fields
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
    await this.firstNameField.fill('Wania');
    await this.lastNameField.click();
    await this.lastNameField.fill('Khan');
    await this.streetField.click();
    await this.streetField.fill('pechh6');
    await this.cityField.click();
    await this.cityField.fill('karachi');
    await this.stateField.click();
    await this.stateField.fill('lkarachi');
    await this.zipCodeField.click();
    await this.page.locator('role=table').click();
    await this.usernameField.click();
    await this.usernameField.fill('WaniaKhan');
    await this.passwordField.click();
    await this.passwordField.fill('12345');
    await this.repeatedPasswordField.click();
    await this.repeatedPasswordField.fill('12345');
  }

  // Method to click the 'Register' button
  async submitForm() {
    await this.submitButton.click();
  }
}
