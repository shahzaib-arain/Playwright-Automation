// pages/RequestLoanPage.ts
import { Page } from '@playwright/test';

export class RequestLoanPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get loanAmountField() {
    return this.page.locator('#amount');
  }

  private get downPaymentField() {
    return this.page.locator('#downPayment');
  }

  private get fromAccountDropdown() {
    return this.page.locator('#fromAccountId');
  }

  private get applyNowButton() {
    return this.page.locator('input[value="Apply Now"]');
  }

  async navigate() {
    await this.page.goto('https://parabank.parasoft.com/parabank/requestloan.htm');
  }

  async applyForLoan(loanAmount: string, downPayment: string, fromAccountIndex: number) {
    await this.loanAmountField.fill(loanAmount);
    await this.downPaymentField.fill(downPayment);
    
    // Select from account
    const options = await this.fromAccountDropdown.locator('option').all();
    if (fromAccountIndex < options.length) {
      const value = await options[fromAccountIndex].getAttribute('value');
      if (value) {
        await this.fromAccountDropdown.selectOption(value);
      }
    }
  }

  async submitApplication() {
    await this.applyNowButton.click();
  }
}