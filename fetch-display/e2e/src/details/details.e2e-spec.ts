import { AppPage } from './details.po';
import { browser } from 'protractor';

describe('details check on fetch and display data app', () => {
  let page: AppPage;
  let minUser: number;
  let maxUser: number;
  let id: number;
  minUser = 1;
  maxUser = 10;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    id = Math.floor(Math.random() * (maxUser - minUser) + minUser);
  });

  it('should display heading Users', () => {
    expect(page.getParagraphText()).toEqual('Users');
  });

  it('navigate to random user details page', () => {
    page.navigateToDetails(id);
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/details/' + id);
  });

  it('should display user fullname', () => {
    page.navigateToDetails(id);
    expect(page.userFullName()).toContain(' ');
  });

  it('display username, email, and phone number', () => {
    page.navigateToDetails(id);
    expect(page.getUsername()).toContain('Username: ');
    expect(page.getUserEmail()).toContain('Email: ');
    expect(page.getUserPhoneNo()).toContain('Phone: ');
  });
});
