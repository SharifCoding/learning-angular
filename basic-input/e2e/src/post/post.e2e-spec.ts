import { AppPage } from './post.po';
import { browser, element, by } from 'protractor';

describe('Post check on Basic Input App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    page.navigateToPost();
  });

  it('naviagte bewtween Post and User pages', () => {
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/post');
    page.navigateToUser();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/');
  });

  it('should display the post heading', () => {
    expect(page.getPostHeadingText()).toEqual('Posts');
  });

  it('should display the post content', () => {
    expect(page.getPostContentMain()).toBeTruthy();
    expect(page.getPostContentParagraph()).toBeTruthy();
  });

  it('should display correct number of posts', () => {
    expect(page.countNumberOfPost().count()).toBe(100);
  });
});
