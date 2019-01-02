import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('simple-angular app', () => {
  let page: AppPage;
  let linkOne: string;
  let linkTwo: string;

  linkOne = 'https://angular.io/tutorial';
  linkTwo = 'https://github.com/angular/angular-cli/wiki';

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
    expect(page.getFirstLinkText()).toMatch('Tour of Heroes');
  });

  it('link "CLI Documentation" redirect to the correct page', () => {
    page.navigateTo();
    page.getCorrectUrl(linkTwo);
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/');
    expect(page.getSecondLinkText()).toMatch('CLI Documentation');
  });

  it('should display link "Angular blog"', () => {
    page.navigateTo();
    expect(page.getThirdLinkText()).toContain('Angular blog');
  });
});
