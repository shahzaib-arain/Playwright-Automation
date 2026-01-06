// pages/AccountActivityPage.ts
import { Page } from '@playwright/test';

export class AccountActivityPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get periodSelect() {
    return this.page.locator('#month');
  }

  private get typeSelect() {
    return this.page.locator('#transactionType');
  }

  private get goButton() {
    return this.page.locator('input[value="Go"]');
  }

  private get downloadPDFLink() {
    return this.page.getByText('Download PDF');
  }

  async navigateToAccount(accountIndex: number) {
    await this.page.goto('https://parabank.parasoft.com/parabank/overview.htm');
    const links = await this.page.locator('a[href*="activity.htm"]').all();
    if (accountIndex < links.length) {
      await links[accountIndex].click();
    }
  }

  async selectPeriod(period: string) {
    await this.periodSelect.selectOption(period);
  }

  async selectType(type: string) {
    await this.typeSelect.selectOption(type);
  }

  async go() {
    await this.goButton.click();
  }

  async downloadStatementPDF() {
    const downloadPromise = this.page.waitForEvent('download');
    await this.downloadPDFLink.click();
    return await downloadPromise;
  }
}