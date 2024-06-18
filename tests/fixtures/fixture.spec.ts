import {expect, test} from '../fixtures/todo-page'

test('fixture test', async ({page, toDoPage}) =>{
    await toDoPage.addToDo('spec Fixture Test')
    await expect(page.getByTestId('todo-title')).toContainText(['spec Fixture Test'])
})
