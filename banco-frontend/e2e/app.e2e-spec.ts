import { BancoPage } from './app.po';

describe('banco App', function() {
  let page: MeatPage;

  beforeEach(() => {
    page = new MeatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bc works!');
  });
});
