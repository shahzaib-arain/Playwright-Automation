// pages/BillPayPage.ts
import { Page } from '@playwright/test';

export class BillPayPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get payeeNameField() {
    return this.page.locator('[name="payee.name"]');
  }

  private get addressField() {
    return this.page.locator('[name="payee.address.street"]');
  }

  private get cityField() {
    return this.page.locator('[name="payee.address.city"]');
  }

  private get stateField() {
    return this.page.locator('[name="payee.address.state"]');
  }

  private get zipCodeField() {
    return this.page.locator('[name="payee.address.zipCode"]');
  }

  private get phoneField() {
    return this.page.locator('[name="payee.phoneNumber"]');
  }

  private get accountField() {
    return this.page.locator('[name="payee.accountNumber"]');
  }

  private get amountField() {
    return this.page.locator('[name="amount"]');
  }

  private get fromAccountDropdown() {
    return this.page.locator('#fromAccountId');
  }

  private get sendPaymentButton() {
    return this.page.locator('input[value="Send Payment"]');
  }

  async navigate() {
    await this.page.goto('https://parabank.parasoft.com/parabank/billpay.htm');
  }

  async fillPayeeInfo(
    name: string,
    address: string,
    city: string,
    state: string,
    zipCode: string,
    phone: string,
    account: string,
    amount: string
  ) {
    await this.payeeNameField.fill(name);
    await this.addressField.fill(address);
    await this.cityField.fill(city);
    await this.stateField.fill(state);
    await this.zipCodeField.fill(zipCode);
    await this.phoneField.fill(phone);
    await this.accountField.fill(account);
    await this.amountField.fill(amount);
  }

  async selectFromAccount(index: number) {
    const options = await this.fromAccountDropdown.locator('option').all();
    if (index < options.length) {
      const value = await options[index].getAttribute('value');
      if (value) {
        await this.fromAccountDropdown.selectOption(value);
      }
    }
  }

  async sendPayment() {
    await this.sendPaymentButton.click();
  }
}