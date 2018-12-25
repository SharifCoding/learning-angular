import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getFirstParagraphText() {
    return element.all(by.css('app-user h1')).first().getText();
  }

  pressClickMeButton() {
    return element(by.buttonText('Click Me')).click();
  }

  pressEditUserButton() {
    return element(by.buttonText('Edit User')).click();
  }

  editNameField() {
    var queryInput = element(by.css('[name="name"]'));
    return queryInput.clear().then(() => {
      queryInput.sendKeys('Bart Simpson')
    })
  }

  editAgeField() {
    var queryInput = element(by.css('[name="age"]'));
    return queryInput.clear().then(() => {
      queryInput.sendKeys('Bart Simpson')
    })
  }

  editEmailField() {
    var queryInput = element(by.css('[name="email"]'));
    return queryInput.clear().then(() => {
      queryInput.sendKeys('Bart Simpson')
    })
  }

  editStreetField() {
    var queryInput = element(by.css('[name="steet"]'));
    return queryInput.clear().then(() => {
      queryInput.sendKeys('Bart Simpson')
    })
  }

  editCityField() {
    var queryInput = element(by.css('[name="city"]'));
    return queryInput.clear().then(() => {
      queryInput.sendKeys('Bart Simpson')
    })
  }

  editCountryField() {
    var queryInput = element(by.css('[name="country"]'));
    return queryInput.clear().then(() => {
      queryInput.sendKeys('Bart Simpson')
    })
  }
}
