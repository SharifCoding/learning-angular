import { AppPage } from './app.po';

describe('Todo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('correct browser title', () => {
    expect(page.getBrowserTitle()).toEqual('TodoApp');
  });

  it('should display Todo App message', () => {
    expect(page.getHeadingText()).toEqual('Todo App');
  });

  it('should display placeholder text Add Todo', () => {
    expect(page.getFormText()).toEqual('Add Todo');
  });

  it('should display ADD material-icons', () => {
    expect(page.checkAddIcon().isDisplayed()).toBeTruthy();
  });
});
