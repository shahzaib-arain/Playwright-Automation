//Testcase (Username already exist)
import { Page } from '@playwright/test';

export class ForgetPass {
  constructor(private page: Page) {}

  // Navigate to the "Register" page
  async navigateToRegisterPage() {
    await this.page.goto('https://parabank.parasoft.com/parabank/about.htm');
    await this.page.getByRole('link', { name: 'Register' }).click();
  }

  // Fill out the first name with CapsLock handling
  async fillFirstName(firstName: string) {
    const firstNameField = this.page.locator('[id="customer\\.firstName"]');
    await firstNameField.click();
    for (const char of firstName) {
      if (char === char.toUpperCase()) {
        await firstNameField.press('CapsLock');
      }
      await firstNameField.fill(char);
    }
    await firstNameField.press('CapsLock'); // Reset CapsLock
  }

  // Fill out the last name with CapsLock handling
  async fillLastName(lastName: string) {
    const lastNameField = this.page.locator('[id="customer\\.lastName"]');
    await lastNameField.click();
    for (const char of lastName) {
      if (char === char.toUpperCase()) {
        await lastNameField.press('CapsLock');
      }
      await lastNameField.fill(char);
    }
    await lastNameField.press('CapsLock'); // Reset CapsLock
  }

  // Fill out the address fields
  async fillAddress(street: string, city: string, state: string, zipCode: string) {
    const streetField = this.page.locator('[id="customer\\.address\\.street"]');
    const cityField = this.page.locator('[id="customer\\.address\\.city"]');
    const stateField = this.page.locator('[id="customer\\.address\\.state"]');
    const zipCodeField = this.page.locator('[id="customer\\.address\\.zipCode"]');
    
    await streetField.click();
    await streetField.fill(street);

    await cityField.click();
    await cityField.fill(city);

    await stateField.click();
    await stateField.fill(state);

    await zipCodeField.click();
    await zipCodeField.fill(zipCode);
  }

  // Fill out the phone number and SSN fields
  async fillPhoneAndSSN(phone: string, ssn: string) {
    const phoneField = this.page.locator('[id="customer\\.phoneNumber"]');
    const ssnField = this.page.locator('[id="customer\\.ssn"]');
    
    await phoneField.click();
    await phoneField.fill(phone);

    await ssnField.click();
    await ssnField.fill(ssn);
  }

  // Fill out the username and password fields
  async fillUsernameAndPassword(username: string, password: string) {
    const usernameField = this.page.locator('[id="customer\\.username"]');
    const passwordField = this.page.locator('[id="customer\\.password"]');
    
    await usernameField.click();
    for (const char of username) {
      if (char === char.toUpperCase()) {
        await usernameField.press('CapsLock');
      }
      await usernameField.fill(char);
    }
    await usernameField.press('CapsLock'); // Reset CapsLock

    await passwordField.click();
    await passwordField.fill(password);
  }

  // Confirm the repeated password field
  async fillRepeatedPassword(repeatedPassword: string) {
    const repeatedPasswordField = this.page.locator('#repeatedPassword');
    await repeatedPasswordField.click();
    await repeatedPasswordField.fill(repeatedPassword);
  }

  // Click the Register button
  async clickRegisterButton() {
    await this.page.getByRole('button', { name: 'Register' }).click();
  }
}
