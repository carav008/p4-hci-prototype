import { P4HciPrototypePage } from './app.po';

describe('p4-hci-prototype App', () => {
  let page: P4HciPrototypePage;

  beforeEach(() => {
    page = new P4HciPrototypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
