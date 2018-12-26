import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getLastParagraphText() {
    return element.all(by.css('app-user h1')).last().getText();
  }
}
