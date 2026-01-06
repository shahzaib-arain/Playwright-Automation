// pages/AdminPage.ts
import { Page } from '@playwright/test';

export class AdminPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  private get initializeButton() {
    return this.page.locator('button[value="INIT"]');
  }

  private get cleanupButton() {
    return this.page.locator('button[value="CLEAN"]');
  }

  private get shutdownButton() {
    return this.page.locator('button[value="SHUTDOWN"]');
  }

  private get jmsStartButton() {
    return this.page.locator('button[value="START"]');
  }

  private get jmsStopButton() {
    return this.page.locator('button[value="STOP"]');
  }

  async navigate() {
    await this.page.goto('https://parabank.parasoft.com/parabank/admin.htm');
  }

  async initializeDatabase() {
    await this.initializeButton.click();
  }

  async cleanupDatabase() {
    await this.cleanupButton.click();
  }

  async shutdown() {
    await this.shutdownButton.click();
  }

  async startJMS() {
    await this.jmsStartButton.click();
  }

  async stopJMS() {
    await this.jmsStopButton.click();
  }
}