// pages/OpenAccountPage.ts
import { Page } from '@playwright/test';

export class OpenAccountPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get accountTypeDropdown() {
    return this.page.locator('#type');
  }

  private get fromAccountDropdown() {
    return this.page.locator('#fromAccountId');
  }

  private get openNewAccountButton() {
    return this.page.locator('input[value="Open New Account"]');
  }

  async navigate() {
    await this.page.goto('https://parabank.parasoft.com/parabank/openaccount.htm');
  }

  async selectAccountType(type: 'CHECKING' | 'SAVINGS') {
    await this.accountTypeDropdown.selectOption(type === 'CHECKING' ? '0' : '1');
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

  async openNewAccount() {
    await this.openNewAccountButton.click();
  }
}