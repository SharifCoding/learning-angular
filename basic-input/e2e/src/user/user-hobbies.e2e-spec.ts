import { AppPage } from './user-hobbies.po';

describe('User hobbies check on Basic Input App', () => {
  let page: AppPage;
  let insertHobby = 'Beer';
  let hobbyNumber = 0;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display the h1 hobbies text', () => {
    expect(page.getLastParagraphText()).toEqual('Hobbies');
  });

  it('should display default hobby list', () => {
    page.getHobbyList().then((items) => {
      expect(items.length).toBe(3);
      expect(items[0].getText()).toContain('Donuts');
      expect(items[1].getText()).toContain('More');
      expect(items[2].getText()).toContain('Everything');
    });
  });

  it('insert new hobby to current list', () => {
    page.inputNewHobby(insertHobby);
    page.getHobbyList().then((items) => {
      expect(items[0].getText()).toContain(insertHobby);
    });
  });

  it('remove a hobby from the hobby list', () => {
    page.removeFirstHobby(hobbyNumber);
    page.getHobbyList().then((items) => {
      expect(items[hobbyNumber].getText()).toContain('More');
    });
  });

  it('insert and remove a hobby from the list', () => {
    page.inputNewHobby(insertHobby);
    page.getHobbyList().then((items) => {
      expect(items[0].getText()).toContain(insertHobby);
    });
    page.removeFirstHobby(hobbyNumber + 1);
    page.getHobbyList().then((items) => {
      expect(items[0].getText()).toContain(insertHobby);
    });
  });
});
