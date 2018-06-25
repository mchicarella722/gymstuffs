import { AppPage } from './app.po';

<<<<<<< HEAD
describe('fitness-tracker-ang App', () => {
=======
describe('gymstuffs App', () => {
>>>>>>> f9c56d5d0cb491f3cffebc7ed54ac24e2a060b4e
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
