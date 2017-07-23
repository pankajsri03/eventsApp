import { EventsappPage } from './app.po';

describe('eventsapp App', () => {
  let page: EventsappPage;

  beforeEach(() => {
    page = new EventsappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
