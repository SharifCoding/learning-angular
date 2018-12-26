import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  pressClickMeButton() {
    return element(by.buttonText('Click Me')).click();
  }

  pressEditUserButton() {
    return element(by.buttonText('Edit User')).click();
  }

  getUserName() {
    return element.all(by.css('app-user h1')).first().getText();
  }

  editNameField() {
    var queryInput = element(by.css('[name="name"]'));
    return queryInput.clear().then(() => {
      queryInput.sendKeys('Bart Simpson')
    })
  }

  getUserAge() {
    return element.all(by.css('app-user li')).get(0).getText();
  }

  editAgeField() {
    var queryInput = element(by.css('[name="age"]'));
    return queryInput.clear().then(() => {
      queryInput.sendKeys('10')
    })
  }

  getUserEmail() {
    return element.all(by.css('app-user li')).get(1).getText();
  }

  editEmailField() {
    var queryInput = element(by.css('[name="email"]'));
    return queryInput.clear().then(() => {
      queryInput.sendKeys('bartsimpson@springfield.com')
    })
  }

  getUserStreetCity() {
    return element.all(by.css('app-user li')).get(2).getText();
  }

  editStreetField() {
    var queryInput = element(by.css('[name="street"]'));
    return queryInput.clear().then(() => {
      queryInput.sendKeys('Not Evergreen')
    })
  }

  editCityField() {
    var queryInput = element(by.css('[name="city"]'));
    return queryInput.clear().then(() => {
      queryInput.sendKeys('Smellyfield')
    })
  }

  getUserCountry() {
    return element.all(by.css('app-user li')).get(3).getText();
  }

  editCountryField() {
    var queryInput = element(by.css('[name="country"]'));
    return queryInput.clear().then(() => {
      queryInput.sendKeys('Bart World')
    })
  }
}
