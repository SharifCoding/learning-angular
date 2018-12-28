import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getWelcomeText() {
    return element(by.css('app-root h1')).getText();
  }

  numberOfCardDetails() {
    return element.all(by.className('card-body'));
  }

  checkFirstCard() {
    return element.all(by.css('.card-title')).first().getText();
  }

  checkLastCard() {
    return element.all(by.css('.card-title')).last().getText();
  }
}
