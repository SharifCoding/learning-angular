import { AppPage } from './user-hobbies.po';

describe('User hobbies check on Basic Input App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display the h1 hobbies text', () => {
    expect(page.getLastParagraphText()).toEqual('Hobbies');
  });
});