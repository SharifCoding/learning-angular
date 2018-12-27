import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getWelcomeText() {
    return element(by.css('app-root h1')).getText();
  }

  getHeadingText() {
    return element(by.css('app-root h2')).getText();
  }

  getFirstParagraph() {
    return element.all(by.css('app-customers p')).get(0).getText();
  }

  getSecondParagraph() {
    return element.all(by.css('app-customers p')).get(1).getText();
  }

  getThirdParagraph() {
    return element.all(by.css('app-customers p')).get(2).getText();
  }

  numberOfCardDetails() {
    return element.all(by.className('card-body'));
  }
}
