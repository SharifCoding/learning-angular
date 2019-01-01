import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('simple-angular app', () => {
  let page: AppPage;
  let linkOne: string;
  let linkTwo: string;
  let linkThree: string;

  linkOne = 'https://angular.io/tutorial';
  linkTwo = 'https://github.com/angular/angular-cli/wiki';
  linkThree = 'https://blog.angular.io/';

  beforeEach(() => {
    page = new AppPage();
  });

  it('correct browser title', () => {
    page.navigateTo();
    expect(page.getBrowserTitle()).toEqual('SimpleAngularApp');
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('Welcome to simple-angular-app!');
  });

  it('should display paragraph message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Here are some links to help you start:');
  });

  it('link "Tour of Heroes" redirect to the correct page', () => {
    page.navigateTo();
    page.getCorrectUrl(linkOne);
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/');
  });

  xit('link "CLI Documentation" redirect to the correct page', () => {
    page.navigateTo();
    page.getCorrectUrl(linkTwo);
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/');
  });

  xit('link "Angular blog" redirect to the correct page', () => {
    page.navigateTo();
    page.getCorrectUrl(linkThree);
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/');
  });
});
