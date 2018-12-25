import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getFirstParagraphText() {
    return element.all(by.css('app-user h1')).first().getText();
  }

  getLastParagraphText() {
    return element.all(by.css('app-user h1')).last().getText();
  }
}
