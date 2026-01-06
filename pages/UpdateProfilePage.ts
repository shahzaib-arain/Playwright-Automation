// pages/UpdateProfilePage.ts
import { Page } from '@playwright/test';

export class UpdateProfilePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get phoneField() {
    return this.page.locator('#phoneNumber');
  }

  private get updateButton() {
    return this.page.locator('input[value="Update Profile"]');
  }

  async navigate() {
    await this.page.goto('https://parabank.parasoft.com/parabank/updateprofile.htm');
  }

  async updatePhone(phoneNumber: string) {
    await this.phoneField.clear();
    await this.phoneField.fill(phoneNumber);
  }

  async update() {
    await this.updateButton.click();
  }
}