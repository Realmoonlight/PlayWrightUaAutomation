import { Page, expect } from "@playwright/test";
export class Drag_and_Drop {
    readonly page: Page;
    constructor(page: Page) {
        this.page = page
    }
    get dragEl(){
        return'[draggable="true"]'
    }
    get drophereEl(){
        return "#mydropzone"
    }
    get dropList(){
        return "#droppedlist"
    }
    public async dragAndDropEl(text: string) {
        // await this.page.locator(this.dragEl, {hasText: text}).dragTo(this.page.locator(this.drophereEl))
        const dragTo = this.page.locator(this.drophereEl)
        await this.page.locator(this.dragEl, {hasText: text}).dragTo(dragTo)
        expect(await this.page.locator(this.dropList).textContent()).toContain(text)
    }
    public async dragAndDropElOpt2(text: string) {
        await this.page.locator(this.dragEl, {hasText: text}).hover()
        await this.page.mouse.down()
        await this.page.locator(this.drophereEl).hover()
        await this.page.mouse.up()
        expect(await this.page.locator(this.dropList).textContent()).toContain(text)
        
    }

}