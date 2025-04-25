import { TodoPage } from "./todopage"; // Ensure this matches the actual file name casing
import { test as base, expect } from '@playwright/test';

type myFixtures = {
    todoPage: TodoPage
}
  
export const test = base.extend<myFixtures>({
    todoPage: async ({page}, use) => {
      // setup the fixture
      const todoPage = new TodoPage(page);
      await todoPage.goto();
      await todoPage.addTodo('item 1');
      await todoPage.addTodo('item 2');
  
      await use(todoPage);
    }
});

export {expect} from '@playwright/test';
  