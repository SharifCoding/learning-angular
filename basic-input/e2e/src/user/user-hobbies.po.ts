import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class AppPage {
  navigateTo() {
    return browser.get('/')
  }

  getLastParagraphText() {
    return element.all(by.css('app-user h1')).last().getText()
  }

  getHobbyList() {
    return element.all(by.css('.hobbies li'))
  }

  inputNewHobby(newHobby) {
    let queryInput = element(by.css('[name="hobby"]'))
    return queryInput.clear().then(() => {
      queryInput.sendKeys(newHobby)
      browser.actions().sendKeys(protractor.Key.ENTER).perform()
    })
  }

  removeFirstHobby(hobbyNumber) {
    return element.all(by.buttonText('X')).get(hobbyNumber).click();
  }
}
