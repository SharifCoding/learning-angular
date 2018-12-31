import { AppPage } from './users.po';
import { browser, by } from 'protractor';

describe('users check on fetch and display data app', () => {
  let page: AppPage;
  let maxUser: number;
  maxUser = 10;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('navigate to users page by defualt', () => {
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/');
  });

  it('should display heading Users', () => {
    expect(page.getParagraphText()).toEqual('Users');
  });

  it('should show ten user details', () => {
    expect(page.numberOfUserDetails().count()).toBe(maxUser);
  });

  it('check each user element contains detail elements', () => {
    page.userParentElement().each((childElement) => {
      expect(childElement.element(by.id('userName')).isPresent()).toBe(true);
      expect(childElement.element(by.id('userEmail')).isPresent()).toBe(true);
      expect(childElement.element(by.id('userURL')).isPresent()).toBe(true);
    });
  });
});
