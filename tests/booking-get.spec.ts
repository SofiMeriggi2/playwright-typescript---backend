import { test, expect } from './fixtures';

test.describe('Booking GET', () => {

  test('TC-03 get all bookings devuelve lista', async ({ client }) => {
    const response = await client.getAllBookings();

    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
  });

  test('TC-04 get booking por id devuelve datos correctos', async ({ client, createdBookingId }) => {
    const response = await client.getBooking(createdBookingId);

    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data.firstname).toBe('Sofi');
    expect(data.lastname).toBe('QA');
    expect(data.totalprice).toBe(150);
  });

  test('TC-05 id inexistente devuelve 404', async ({ client }) => {
    const response = await client.getBooking(999999);

    expect(response.status()).toBe(404);
  });

});