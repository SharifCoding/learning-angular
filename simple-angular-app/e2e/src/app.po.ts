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

  getParagraphText() {
    return element.all(by.css('app-root h2')).first().getText();
  }

  getCorrectUrl(providedURL: string) {
    element(by.css('[href="' + providedURL + '"]')).click().then(() => {
      browser.driver.getAllWindowHandles().then((handles) => {
        let newWindowHandle = handles[1]; // new window
        browser.driver.switchTo().window(newWindowHandle).then(() => {
          expect(browser.driver.getCurrentUrl()).toMatch(providedURL);
        });
        browser.driver.close();
        browser.driver.switchTo().window(handles[0]);
      });
    });
  }

  getFirstLinkText() {
    return element.all(by.css('app-root li')).get(0).getText();
  }

  getSecondLinkText() {
    return element.all(by.css('app-root li')).get(1).getText();
  }

  getThirdLinkText() {
    return element.all(by.css('app-root li')).get(2).getText();
  }
}
