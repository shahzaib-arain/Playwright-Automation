// pages/SimpleContactPage.ts
import { Page } from '@playwright/test';

export class SimpleContactPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://parabank.parasoft.com/parabank/contact.htm');
  }

  async getFormFieldsCount() {
    return await this.page.locator('input, textarea').count();
  }

  async isSubmitButtonVisible() {
    return await this.page.getByRole('button', { name: 'Send to Customer Care' }).isVisible();
  }
}