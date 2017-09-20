import { ClarityPage } from './app.po';

describe('clarity App', () => {
  let page: ClarityPage;

  beforeEach(() => {
    page = new ClarityPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
