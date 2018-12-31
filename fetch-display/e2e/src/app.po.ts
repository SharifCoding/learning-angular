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

  navigateToPosts() {
    return element(by.cssContainingText('[href*="/posts"]', 'message')).click();
  }

  navigateToUsers() {
    return element(by.cssContainingText('[href*="/"]', 'supervised_user_circle')).click();
  }

  navigateToDetails(getId: number) {
    return element.all(by.id('userName')).get(getId - 1).click();
  }
}
