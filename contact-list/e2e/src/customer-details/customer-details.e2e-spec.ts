import { AppPage } from './customer-details.po';
import { browser } from 'protractor';

describe('customer-details check on the contact-list app', () => {
  let page: AppPage;
  let id: number;

  beforeEach(() => {
    page = new AppPage();
    id = Math.floor(Math.random() * (5 - 1) + 1);

    page.navigateTo();
    page.clickCustomerDetails(id);
  });

  it('use correct URL for customer details', () => {
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/customerdetails/' + id);
  });

  it('should display h1 welcome message', () => {
    expect(page.getWelcomeText()).toEqual('Welcome to contact-list!');
  });

  it('should display customer details heading', () => {
    expect(page.getHeadingText()).toEqual('Customer Details');
  });

  it('should display customer name', () => {
    expect(page.checkCustomerName()).toContain('Simpson');
  });

  it('showing all customer information', () => {
    expect(page.getCustomerDetails().count()).toBe(13);
  });

  it('press Go Back button and return to base URL', () => {
    expect(page.pressGoBackButton()).toBeTruthy;
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/customers');
  });
});
