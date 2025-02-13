//Test customre cARE WITH USERNAME WITHOUT EMAIL AND PHONE 
import { Page } from '@playwright/test';

export class CustomreCare2 {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Elements
  private get contactUsLink() {
    return this.page.getByRole('link', { name: 'Contact Us' });
  }

  private get nameField() {
    return this.page.locator('#name');
  }

  private get messageField() {
    return this.page.locator('#message');
  }

  private get sendToCustomerCareButton() {
    return this.page.getByRole('button', { name: 'Send to Customer Care' });
  }

  // Actions
  async navigateToAboutPage() {
    await this.page.goto('https://parabank.parasoft.com/parabank/about.htm');
  }

  async openContactUsPage() {
    await this.contactUsLink.click();
  }

  async fillInName(name: string) {
    await this.nameField.click();
    await this.nameField.fill(name);
  }

  async fillInMessage(message: string) {
    await this.messageField.click();
    await this.messageField.fill(message);
  }

  async submitToCustomerCare() {
    await this.sendToCustomerCareButton.click();
  }
}
