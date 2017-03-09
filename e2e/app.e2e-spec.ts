import { BindProjectPage } from './app.po';

describe('bind-project App', function() {
  let page: BindProjectPage;

  beforeEach(() => {
    page = new BindProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
