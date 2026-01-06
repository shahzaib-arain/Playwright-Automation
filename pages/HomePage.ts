// pages/HomePage.ts
import { Page } from '@playwright/test';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get aboutUsLink() {
    return this.page.getByText('About Us');
  }

  private get servicesLink() {
    return this.page.getByText('Services');
  }

  private get adminLink() {
    return this.page.getByText('Admin');
  }

  private get homeLink() {
    return this.page.getByRole('link', { name: 'home' });
  }

  async navigate() {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  }

  async clickAboutUs() {
    await this.aboutUsLink.click();
  }

  async clickServices() {
    await this.servicesLink.click();
  }

  async clickAdmin() {
    await this.adminLink.click();
  }

  async clickHome() {
    await this.homeLink.click();
  }
}