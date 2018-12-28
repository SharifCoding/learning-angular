import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  clickCustomerDetails(getId: number) {
    return element.all(by.className('btn btn-primary')).get(getId - 1).click();
  }

  getWelcomeText() {
    return element(by.css('app-root h1')).getText();
  }

  getHeadingText() {
    return element(by.className('card-header')).getText();
  }

  checkCustomerName() {
    return element(by.css('.card-title')).getText();
  }

  getCustomerDetails() {
    return element.all(by.className('card-text'));
  }

  pressGoBackButton() {
    return element(by.cssContainingText('.btn', 'Go Back')).click();
  }
}
