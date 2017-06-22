import { Market2Page } from './app.po';

describe('market2 App', () => {
  let page: Market2Page;

  beforeEach(() => {
    page = new Market2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
