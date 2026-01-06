// pages/SimpleHomePage.ts
import { Page } from '@playwright/test';

export class SimpleHomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  }

  async getTitle() {
    return await this.page.title();
  }

  async isLoginFormVisible() {
    return await this.page.locator('input[name="username"]').isVisible();
  }
}