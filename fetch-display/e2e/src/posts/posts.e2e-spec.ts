import { AppPage } from './posts.po';
import { browser, by } from 'protractor';

describe('posts check on fetch and display data app', () => {
  let page: AppPage;
  let minPost: number;
  let maxPost: number;
  let id: number;
  minPost = 1;
  maxPost = 100;
  id = Math.floor(Math.random() * (maxPost - minPost) + minPost);

  beforeEach(() => {
    page = new AppPage();
    page.navigateToPosts();
  });

  it('navigate to posts page with correct URL', () => {
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/posts');
  });

  it('should display heading Posts', () => {
    expect(page.getPostsHeadingText()).toEqual('Posts');
  });

  it('should show ten posts', () => {
    expect(page.numberOfPosts().count()).toBe(maxPost);
  });

  it('check each post parent element contain child elements', () => {
    page.numberOfPosts().each((childElement) => {
      expect(childElement.element(by.id('postTile')).isPresent()).toBe(true);
      expect(childElement.element(by.id('postBody')).isPresent()).toBe(true);
    });
  });

  it('navigate to users page via post title', () => {
    page.clickOnPostTitle(id);
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/');
  });
});
