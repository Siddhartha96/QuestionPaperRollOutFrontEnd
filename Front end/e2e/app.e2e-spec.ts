import { QPFlightBookingPage } from './app.po';

describe('qp-flight-booking App', () => {
  let page: QPFlightBookingPage;

  beforeEach(() => {
    page = new QPFlightBookingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
