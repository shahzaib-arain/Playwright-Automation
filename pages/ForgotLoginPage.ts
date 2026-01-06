// pages/ForgotLoginPage.ts
import { Page } from '@playwright/test';

export class ForgotLoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get firstNameField() {
    return this.page.locator('#firstName');
  }

  private get lastNameField() {
    return this.page.locator('#lastName');
  }

  private get addressField() {
    return this.page.locator('#address\\.street');
  }

  private get cityField() {
    return this.page.locator('#address\\.city');
  }

  private get stateField() {
    return this.page.locator('#address\\.state');
  }

  private get zipCodeField() {
    return this.page.locator('#address\\.zipCode');
  }

  private get ssnField() {
    return this.page.locator('#ssn');
  }

  private get findLoginInfoButton() {
    return this.page.locator('input[value="Find My Login Info"]');
  }

  async navigate() {
    await this.page.goto('https://parabank.parasoft.com/parabank/lookup.htm');
  }

  async fillCustomerInfo(
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    state: string,
    zipCode: string,
    ssn: string
  ) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.addressField.fill(address);
    await this.cityField.fill(city);
    await this.stateField.fill(state);
    await this.zipCodeField.fill(zipCode);
    await this.ssnField.fill(ssn);
  }

  async submit() {
    await this.findLoginInfoButton.click();
  }
}