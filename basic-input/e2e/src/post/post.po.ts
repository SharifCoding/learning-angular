import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }

  navigateToUser() {
    return element(by.cssContainingText('[href*="/"]', 'User')).click();
  }

  navigateToPost() {
    return element(by.cssContainingText('[href*="/post"]', 'Post')).click();
  }

  getPostHeadingText() {
    return element(by.css('app-post h1')).getText();
  }

  getPostContentMain() {
    return element.all(by.css('app-post h4')).get(0).getText();
  }

  getPostContentParagraph() {
    return element.all(by.css('app-post p')).get(0).getText();
  }

  countNumberOfPost() {
    return element.all(by.css('app-post p'));
  }
}
