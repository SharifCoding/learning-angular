import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  firstCustomerDetails(getId: number) {
    return element.all(by.className('btn btn-primary')).get(getId - 1).click();
  }
}
