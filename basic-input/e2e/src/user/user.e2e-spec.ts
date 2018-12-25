import { AppPage } from './user.po';

describe('User functionality check on Basic Input App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display the default user name', () => {
    expect(page.getFirstParagraphText()).toEqual('Homer Simpson');
  });

  it('should display the editted user name', () => {
    page.pressClickMeButton();
    expect(page.getFirstParagraphText()).toEqual('Marge Simpson');

    page.pressEditUserButton();
    page.editNameField();
    expect(page.getFirstParagraphText()).toEqual('Bart Simpson');
  });
});