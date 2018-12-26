import { AppPage } from './user-details.po';

describe('User details check on Basic Input App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display the default user name', () => {
    expect(page.getUserName()).toEqual('Homer Simpson');
  });

  it('should display the editted user name', () => {
    page.pressClickMeButton();
    expect(page.getUserName()).toEqual('Marge Simpson');

    page.pressEditUserButton();
    page.editNameField();
    expect(page.getUserName()).toEqual('Bart Simpson');
  });

  it('should display the editted user age', () => {
    page.pressClickMeButton();
    expect(page.getUserAge()).toEqual('Age: 36');

    page.pressEditUserButton();
    page.editAgeField();
    expect(page.getUserAge()).toEqual('Age: 10');
  });

  it('should display the editted user email', () => {
    page.pressClickMeButton();
    expect(page.getUserEmail()).toEqual('Email: margesimpson@springfield.com');

    page.pressEditUserButton();
    page.editEmailField();
    expect(page.getUserEmail()).toEqual('Email: bartsimpson@springfield.com');
  });

  it('should display the editted user street and city', () => {
    page.pressClickMeButton();
    expect(page.getUserStreetCity()).toEqual('742 Evergreen Terrace, Springfield');

    page.pressEditUserButton();
    page.editStreetField();
    expect(page.getUserStreetCity()).toEqual('Not Evergreen, Springfield');

    page.editCityField();
    expect(page.getUserStreetCity()).toEqual('Not Evergreen, Smellyfield');
  });

  it('should display the editted user country', () => {
    page.pressClickMeButton();
    expect(page.getUserCountry()).toEqual('USA');

    page.pressEditUserButton();
    page.editCountryField();
    expect(page.getUserCountry()).toEqual('Bart World');
  });
});