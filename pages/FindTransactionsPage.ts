// pages/FindTransactionsPage.ts
import { Page } from '@playwright/test';

export class FindTransactionsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get accountDropdown() {
    return this.page.locator('#accountId');
  }

  private get amountField() {
    return this.page.locator('#criteria\\.amount');
  }

  private get fromDateField() {
    return this.page.locator('#criteria\\.fromDate');
  }

  private get toDateField() {
    return this.page.locator('#criteria\\.toDate');
  }

  private get findByAmountButton() {
    return this.page.locator('button[ng-click*="AMOUNT"]');
  }

  private get findByDateButton() {
    return this.page.locator('button[ng-click*="DATE"]');
  }

  async navigate() {
    await this.page.goto('https://parabank.parasoft.com/parabank/findtrans.htm');
  }

  async selectAccount(index: number) {
    const options = await this.accountDropdown.locator('option').all();
    if (index < options.length) {
      const value = await options[index].getAttribute('value');
      if (value) {
        await this.accountDropdown.selectOption(value);
      }
    }
  }

  async enterAmount(amount: string) {
    await this.amountField.fill(amount);
  }

  async enterFromDate(date: string) {
    await this.fromDateField.fill(date);
  }

  async enterToDate(date: string) {
    await this.toDateField.fill(date);
  }

  async findByAmount() {
    await this.findByAmountButton.click();
  }

  async findByDate() {
    await this.findByDateButton.click();
  }
}