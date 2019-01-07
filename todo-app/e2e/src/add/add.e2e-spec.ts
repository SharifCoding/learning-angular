import { AppPage } from './add.po';

describe('Todo App - Add Functionality', () => {
  let page: AppPage;
  let todoArray = ['JavaScript', 'TypeScript'];

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('input and display text: ' + todoArray[0], () => {
    page.inputToDoItem(todoArray[0]);
    page.clickAddIcon();
    expect(page.checkTodoList()).toMatch(todoArray[0]);
  });

  it('paragraph display latest text: ' + todoArray[0], () => {
    page.inputToDoItem(todoArray[0]);
    page.clickAddIcon();
    expect(page.checkParagraphText()).toContain(todoArray[0]);
  });

  it('input and display text: ' + todoArray[0] + ' & ' + todoArray[1], () => {
    page.inputToDoItem(todoArray[0]);
    page.clickAddIcon();
    page.inputToDoItem(todoArray[1]);
    page.clickAddIcon();
    expect(page.checkTodoList()).toMatch(todoArray[0]);
    expect(page.checkTodoList()).toMatch(todoArray[1]);
  });

  it('paragraph display latest text: ' + todoArray[1], () => {
    page.inputToDoItem(todoArray[0]);
    page.clickAddIcon();
    page.inputToDoItem(todoArray[1]);
    page.clickAddIcon();
    expect(page.checkParagraphText()).toContain(todoArray[1]);
  });
});
