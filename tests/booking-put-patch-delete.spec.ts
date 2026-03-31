import { test, expect } from './fixtures';
import { Payloads } from '../data/payloads';

test.describe('Booking PUT / PATCH / DELETE', () => {

  test('TC-08 PUT actualiza todos los campos', async ({ client, createdBookingId, authToken }) => {
    const response = await client.updateBooking(
      createdBookingId,
      Payloads.updatedBooking(),
      authToken
    );

    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data.lastname).toBe('Updated');
    expect(data.totalprice).toBe(200);
  });

  test('TC-09 PATCH actualiza solo campos enviados', async ({ client, createdBookingId, authToken }) => {
    const response = await client.partialUpdateBooking(
      createdBookingId,
      Payloads.partialUpdate(),
      authToken
    );

    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data.firstname).toBe('SofiPatch');
    expect(data.totalprice).toBe(999);
    expect(data.lastname).toBe('QA');
  });

  test('TC-10 DELETE elimina la reserva correctamente', async ({ client, authToken }) => {
    const create = await client.createBooking(Payloads.newBooking());
    const { bookingid } = await create.json();

    const deleteResponse = await client.deleteBooking(bookingid, authToken);
    expect(deleteResponse.status()).toBe(201);

    const getResponse = await client.getBooking(bookingid);
    expect(getResponse.status()).toBe(404);
  });

});