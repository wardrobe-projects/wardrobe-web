import { WardrobePage } from './app.po';

describe('wardrobe App', () => {
  let page: WardrobePage;

  beforeEach(() => {
    page = new WardrobePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
