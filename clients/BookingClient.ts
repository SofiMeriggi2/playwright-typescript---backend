import { APIRequestContext, APIResponse } from '@playwright/test';

export class BookingClient {
  constructor(private request: APIRequestContext) {}

  async getAllBookings(): Promise<APIResponse> {
    return this.request.get('/booking');
  }

  async getBooking(id: number): Promise<APIResponse> {
    return this.request.get(`/booking/${id}`);
  }

  async createBooking(payload: object): Promise<APIResponse> {
    return this.request.post('/booking', { data: payload });
  }

  async updateBooking(id: number, payload: object, token: string): Promise<APIResponse> {
    return this.request.put(`/booking/${id}`, {
      data: payload,
      headers: { Cookie: `token=${token}` },
    });
  }

  async partialUpdateBooking(id: number, payload: object, token: string): Promise<APIResponse> {
    return this.request.patch(`/booking/${id}`, {
      data: payload,
      headers: { Cookie: `token=${token}` },
    });
  }

  async deleteBooking(id: number, token: string): Promise<APIResponse> {
    return this.request.delete(`/booking/${id}`, {
      headers: { Cookie: `token=${token}` },
    });
  }
}