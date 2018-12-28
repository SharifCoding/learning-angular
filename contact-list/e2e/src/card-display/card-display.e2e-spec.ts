import { AppPage } from './card-display.po';

describe('card-display check on the contact-list app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display h1 welcome message', () => {
    expect(page.getWelcomeText()).toEqual('Welcome to contact-list!');
  });

  it('showing five card displays', () => {
    expect(page.numberOfCardDetails().count()).toBe(5);
  });

  it('check first card details', () => {
    expect(page.checkFirstCard()).toEqual('Homer Simpson');
  });

  it('check last card details', () => {
    expect(page.checkLastCard()).toEqual('Maggie Simpson');
  });
});
