import { MytodosPage } from './app.po';

describe('mytodos App', () => {
  let page: MytodosPage;

  beforeEach(() => {
    page = new MytodosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
