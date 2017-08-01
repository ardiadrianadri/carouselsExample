import { CarouselsPage } from './app.po';

describe('carousels App', () => {
  let page: CarouselsPage;

  beforeEach(() => {
    page = new CarouselsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
