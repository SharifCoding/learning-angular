import { AppPage } from './delete.po';

describe('Todo App - Delete Functionality', () => {
  let page: AppPage;
  let todoArray = ['JavaScript', 'TypeScript'];

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('input and delete a todo item', () => {
    page.inputToDoItem(todoArray[0]);
    page.clickAddIcon();
    page.clickDeleteIcon(0);
    expect(page.checkTodoList()).toMatch('');
  });

  it('input multiple todo item and delete a todo item', () => {
    page.inputToDoItem(todoArray[0]);
    page.clickAddIcon();
    page.inputToDoItem(todoArray[1]);
    page.clickAddIcon();
    page.clickDeleteIcon(1);
    expect(page.checkTodoList()).toMatch(todoArray[0]);
  });
});
