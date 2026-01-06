// pages/TransferFundsPage.ts
import { Page } from '@playwright/test';

export class TransferFundsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get amountField() {
    return this.page.locator('#amount');
  }

  private get fromAccountDropdown() {
    return this.page.locator('#fromAccountId');
  }

  private get toAccountDropdown() {
    return this.page.locator('#toAccountId');
  }

  private get transferButton() {
    return this.page.locator('input[value="Transfer"]');
  }

  async navigate() {
    await this.page.goto('https://parabank.parasoft.com/parabank/transfer.htm');
  }

  async enterAmount(amount: string) {
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

  async selectToAccount(index: number) {
    const options = await this.toAccountDropdown.locator('option').all();
    if (index < options.length) {
      const value = await options[index].getAttribute('value');
      if (value) {
        await this.toAccountDropdown.selectOption(value);
      }
    }
  }

  async transfer() {
    await this.transferButton.click();
  }
}