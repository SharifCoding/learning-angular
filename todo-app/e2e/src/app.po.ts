import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getBrowserTitle() {
    return browser.getTitle();
  }

  getHeadingText() {
    return element(by.css('app-root h1')).getText();
  }

  getFormText() {
    return element(by.name('todo')).getAttribute('placeholder');
  }

  checkAddIcon() {
    return element(by.cssContainingText('.material-icons', 'add'));
  }
}
