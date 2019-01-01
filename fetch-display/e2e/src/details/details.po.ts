import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  navigateToDetails(getId: number) {
    return element.all(by.id('userName')).get(getId - 1).click();
  }

  userFullName() {
    return element(by.css('app-details h1')).getText();
  }

  getUsername() {
    return element(by.id('detail-username')).getText();;
  }

  getUserEmail() {
    return element(by.id('detail-email')).getText();;
  }

  getUserPhoneNo() {
    return element(by.id('detail-phone')).getText();;
  }
}
