////Test no 1 pass(PAGES LOADING )
import { Page } from '@playwright/test';

export class ParaBankPage {
  constructor(private page: Page) {}

  // Navigate to the initial page
  async navigateToHome() {
    await this.page.goto('https://parabank.parasoft.com/parabank/about.htm');
  }

  // Click on the "home" link
  async clickHome() {
    await this.page.getByRole('link', { name: 'home', exact: true }).click();
  }

  // Click on the "about" link
  async clickAbout() {
    await this.page.getByRole('link', { name: 'about', exact: true }).click();
  }

  // Click on the "contact" link
  async clickContact() {
    await this.page.getByRole('link', { name: 'contact', exact: true }).click();
  }
}
