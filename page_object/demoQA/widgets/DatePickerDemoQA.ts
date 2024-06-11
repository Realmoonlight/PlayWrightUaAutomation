import { Page, expect } from "@playwright/test";

export class DatePicker {
  public readonly page: Page; //can't modify

  constructor(page: Page) {
    this.page = page; //global scope access anityme
  }
  get header() {
    return "h1";
  }
  async verifyHeader() {
    const header = this.page.locator(this.header);
    await expect(header).toContainText("Date Picker");
  }
}
