import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('initial check on fetch and display data app', () => {
  let page: AppPage;
  let minUser: number;
  let maxUser: number;
  let id: number;
  minUser = 1;
  maxUser = 10;
  id = Math.floor(Math.random() * (maxUser - minUser) + minUser);

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('correct browser title', () => {
    expect(page.getBrowserTitle()).toEqual('Fetch & Display');
  });

  it('should display heading Users', () => {
    expect(page.getHeadingText()).toEqual('Users');
  });

  it('navigate to posts page', () => {
    page.navigateToPosts();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/posts');
  });

  it('navigate to users page', () => {
    page.navigateToPosts();
    page.navigateToUsers();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/');
  });

  it('navigate to user details page', () => {
    page.navigateToPosts();
    page.navigateToUsers();
    page.navigateToDetails(id);
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/details/' + id);
  });
});
