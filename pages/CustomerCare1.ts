//Test  customre cARE WITH USERNAME WITHOUT message
import { Page } from '@playwright/test';

export class CustomerCare1 {
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

  private get emailField() {
    return this.page.locator('#email');
  }

  private get phoneField() {
    return this.page.locator('#phone');
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
    await this.nameField.press('CapsLock');
    await this.nameField.fill(name);
  }

  async fillInEmail(email: string) {
    await this.emailField.click();
    await this.emailField.fill(email);
  }

  async fillInPhoneNumber(phone: string) {
    await this.phoneField.click();
    await this.phoneField.fill(phone);
  }

  async submitToCustomerCare() {
    await this.sendToCustomerCareButton.click();
  }
}
