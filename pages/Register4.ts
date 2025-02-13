//Test  pass (REGISTER wuth coreect confirm password and all credential without given phone no but its work and created my account)account successfuly created

import { Page } from '@playwright/test';

export class Register4 {
  constructor(private page: Page) {}

  async navigateToRegisterPage() {
    await this.page.goto('https://parabank.parasoft.com/parabank/about.htm');
    await this.page.getByRole('link', { name: 'Register' }).click();
  }

  async fillFirstName(firstName: string) {
    await this.page.locator('[id="customer\\.firstName"]').fill(firstName);
  }

  async fillLastName(lastName: string) {
    await this.page.locator('[id="customer\\.lastName"]').fill(lastName);
  }

  async fillAddress(street: string, city: string, state: string, zipCode: string) {
    await this.page.locator('[id="customer\\.address\\.street"]').fill(street);
    await this.page.locator('[id="customer\\.address\\.city"]').fill(city);
    await this.page.locator('[id="customer\\.address\\.state"]').fill(state);
    await this.page.locator('[id="customer\\.address\\.zipCode"]').fill(zipCode);
  }

  async fillPhoneNumber(phone: string) {
    await this.page.locator('[id="customer\\.phoneNumber"]').fill(phone);
  }

  async fillSSN(ssn: string) {
    await this.page.locator('[id="customer\\.ssn"]').fill(ssn);
  }

  async fillUsername(username: string) {
    await this.page.locator('[id="customer\\.username"]').fill(username);
  }

  async fillPassword(password: string) {
    await this.page.locator('[id="customer\\.password"]').fill(password);
    await this.page.locator('#repeatedPassword').fill(password);
  }

  async submitRegistration() {
    await this.page.getByRole('button', { name: 'Register' }).click();
  }
}
