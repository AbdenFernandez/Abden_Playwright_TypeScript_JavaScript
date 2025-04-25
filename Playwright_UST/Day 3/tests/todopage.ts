import { Locator, Page } from "@playwright/test";

export class TodoPage {
    private readonly inputBox: Locator;
    private readonly todoItems: Locator;

    constructor(public readonly page: Page) {
        this.inputBox = this.page.locator('input.ibox'); // actual locator
        this.todoItems = this.page.locator('todo-item'); 
    }

    async goto() {
        await this.page.goto('');
    }

    // Add todo
    async addTodo(text: string) {
        await this.inputBox.fill(text);
        await this.inputBox.press('Enter');
    }

    // Remove, removeAll, update
}