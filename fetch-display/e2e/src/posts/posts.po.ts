import { browser, by, element } from 'protractor';

export class AppPage {
  navigateToPosts() {
    return browser.get('/posts');
  }

  getPostsHeadingText() {
    return element(by.css('app-posts h1')).getText();
  }

  numberOfPosts() {
    return element.all(by.id('postMain'));
  }

  clickOnPostTitle(getId: number) {
    return element.all(by.id('postTile')).get(getId - 1).click();
  }
}
