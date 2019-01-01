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
      browser.sleep(500);
      browser.getAllWindowHandles().then((handles) => {
        let newWindowHandle = handles[1]; // new window
        browser.switchTo().window(newWindowHandle).then(() => {
          expect(browser.getCurrentUrl()).toMatch(providedURL);
        });
        browser.driver.close();
        browser.driver.switchTo().window(handles[0]);
      });
    });
  }
}
