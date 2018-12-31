import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  numberOfUserDetails() {
    return element.all(by.id('userName'));
  }

  userParentElement() {
    return element.all(by.className('ng-star-inserted'));
  }
}
