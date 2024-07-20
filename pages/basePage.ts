import { Page, expect } from "@playwright/test";

export class BasePage {

    protected readonly page: Page

    constructor(page:Page) {
        this.page = page;
    }

    async loadWeb(url: string) {
        await this.page.goto(url);
    }

    async clickOn(selector: string) {
        await this.page.click(selector);
    }

    async fillField(selector: string, value: string) {
        await this.page.locator(selector).fill(value);
    }

    async expectVisible(selector: string) {
        await expect(this.page.locator(selector)).toBeVisible();
    }

    async expectHidden(selector: string){
        await expect(this.page.locator(selector)).toBeHidden();
    }
    

    async whatIsTheUrl(url: string){
        await expect(this.page.url()).toContain(url);
    }

    async expectHaveText(selector: string, value1: string, value2: string){

        await expect((this.page.locator(selector, { hasText: value1 })) || (this.page.locator(selector, { hasText: value2 }))).toBeVisible();
    }
}