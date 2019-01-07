import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  async inputToDoItem(insertText: string) {
    let queryInput = element(by.css('[name="todo"]'))
    await queryInput.clear();
    queryInput.sendKeys(insertText);
  }

  clickAddIcon() {
    return element(by.cssContainingText('.material-icons', 'add')).click();
  }

  clickDeleteIcon(deleteToDo: number) {
    return element.all(by.cssContainingText('.material-icons', 'delete')).get(deleteToDo).click();
  }

  checkTodoList() {
    return element.all(by.css('.list-instyled li')).getText();
  }
}
