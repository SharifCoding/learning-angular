import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('Initial check on Basic Input App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('check correct HTML title appearing', () => {
    expect(browser.getTitle()).toEqual('BasicInput');
  });

  it('should display the default user name', () => {
    expect(page.getFirstParagraphText()).toEqual('Homer Simpson');
  });

  it('should display the h1 hobbies text', () => {
    expect(page.getLastParagraphText()).toEqual('Hobbies');
  });
});
