import { AppPage } from './customer-details.po';
import { browser } from 'protractor';

describe('customer-details check on the contact-list app', () => {
  let page: AppPage;
  let id = 1; // 1 to 5 card displays

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('use correct URL for customer details', () => {
    page.firstCustomerDetails(id);
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/customerdetails/' + id);
  });
});
