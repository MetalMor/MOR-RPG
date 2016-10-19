import { MORRPG2Page } from './app.po';

describe('mor-rpg-2 App', function() {
  let page: MORRPG2Page;

  beforeEach(() => {
    page = new MORRPG2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
