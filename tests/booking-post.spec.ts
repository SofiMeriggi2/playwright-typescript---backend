import { test, expect } from './fixtures';
import { Payloads } from '../data/payloads';

test.describe('Booking POST', () => {

  test('TC-06 crear reserva devuelve bookingid y datos', async ({ client, authToken }) => {
    const response = await client.createBooking(Payloads.newBooking());

    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data).toHaveProperty('bookingid');
    expect(data.booking.firstname).toBe('Sofi');
    expect(data.booking.totalprice).toBe(150);

    // teardown manual
    await client.deleteBooking(data.bookingid, authToken);
  });

  test('TC-07 crear reserva sin campos requeridos devuelve error', async ({ client }) => {
    const response = await client.createBooking({ firstname: 'Sofi' });

    expect(response.status()).toBe(500);
  });

});