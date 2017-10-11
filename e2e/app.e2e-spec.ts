import { PieChartAppPage } from './app.po';

describe('pie-chart-app App', () => {
  let page: PieChartAppPage;

  beforeEach(() => {
    page = new PieChartAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
