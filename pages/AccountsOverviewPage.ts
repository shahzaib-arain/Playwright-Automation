// pages/AccountsOverviewPage.ts
import { Page } from '@playwright/test';

export class AccountsOverviewPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get accountLinks() {
    return this.page.locator('a[href*="activity.htm"]');
  }

  async viewAccountDetails(accountIndex: number) {
    const links = await this.accountLinks.all();
    if (accountIndex < links.length) {
      await links[accountIndex].click();
    }
  }
  
  async navigate() {
    await this.page.goto('https://parabank.parasoft.com/parabank/overview.htm');
  }
}