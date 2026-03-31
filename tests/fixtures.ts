import { test as base, APIRequestContext } from '@playwright/test';
import { BookingClient } from '../clients/BookingClient';

type Fixtures = {
  authToken: string;
  createdBookingId: number;
  client: BookingClient;
};

export const test = base.extend<Fixtures>({
  client: async ({ request }, use) => {
    await use(new BookingClient(request));
  },

  authToken: async ({ request }, use) => {
    const response = await request.post('/auth', {
      data: { username: 'admin', password: 'password123' },
    });
    const { token } = await response.json();
    await use(token);
  },

  createdBookingId: async ({ client, authToken }, use) => {
    const { Payloads } = await import('../data/payloads');
    const response = await client.createBooking(Payloads.newBooking());
    const { bookingid } = await response.json();

    await use(bookingid);

    // teardown
    try {
      await client.deleteBooking(bookingid, authToken);
    } catch (e) {
      console.warn(`Cleanup failed for booking ${bookingid}: ${e}`);
    }
  },
});

export { expect } from '@playwright/test';