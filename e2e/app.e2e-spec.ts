import { Ng03Page } from './app.po';

describe('ng03 App', () => {
  let page: Ng03Page;

  beforeEach(() => {
    page = new Ng03Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
