export const Payloads = {
  newBooking: () => ({
    firstname: 'Sofi',
    lastname: 'QA',
    totalprice: 150,
    depositpaid: true,
    bookingdates: {
      checkin: '2025-06-01',
      checkout: '2025-06-05',
    },
    additionalneeds: 'Breakfast',
  }),

  updatedBooking: () => ({
    firstname: 'Sofi',
    lastname: 'Updated',
    totalprice: 200,
    depositpaid: false,
    bookingdates: {
      checkin: '2025-07-01',
      checkout: '2025-07-10',
    },
    additionalneeds: 'Lunch',
  }),

  partialUpdate: () => ({
    firstname: 'SofiPatch',
    totalprice: 999,
  }),
} as const;