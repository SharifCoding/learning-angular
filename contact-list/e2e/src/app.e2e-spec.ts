import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('initial check on the contact-list app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('use correct URL for customer list page', () => {
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/customers');
  });

  it('should display h1 welcome message', () => {
    expect(page.getWelcomeText()).toEqual('Welcome to contact-list!');
  });

  it('should display h2 heading title', () => {
    expect(page.getHeadingText()).toEqual('Customer List Page');
  });

  it('should display three paragraphs', () => {
    expect(page.getFirstParagraph()).toContain('Page Displays');
    expect(page.getSecondParagraph()).toContain('Card Displays');
    expect(page.getThirdParagraph()).toContain('Click for more details');
  });

  it('showing five card displays', () => {
    expect(page.numberOfCardDetails().count()).toBe(5);
  });
});
