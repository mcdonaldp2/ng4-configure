import { NgConfigurePage } from './app.po';

describe('ng-configure App', () => {
  let page: NgConfigurePage;

  beforeEach(() => {
    page = new NgConfigurePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
