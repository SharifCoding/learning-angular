import { AppPage } from './app.po';

describe('Todo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Todo App message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Todo App');
  });
});
