import { test as base} from '@playwright/test'
import { ToDoPage } from '../fixtures/ToDoPage'

type Fixture= {
    toDoPage: ToDoPage;
}

export const test = base.extend<Fixture>({
    toDoPage: async ({page}, use) => {
        const toDoPage = new ToDoPage (page)
        await toDoPage.goto()
        await toDoPage.addToDo('Test Todo')
        await toDoPage.addToDo('Test Todo2')
        await toDoPage.addToDo('Test Todo3')
        await use(toDoPage)
        await toDoPage.removeAll()
    }
})
export {expect} from '@playwright/test'