import { test, expect } from '@playwright/test';
import * as fs from 'fs';

const tokenPayload = JSON.parse(fs.readFileSync('./test-data/create_token.json', 'utf-8'));
const createBookingData = JSON.parse(fs.readFileSync('./test-data/create_booking.json', 'utf-8'));
const updateBookingData = JSON.parse(fs.readFileSync('./test-data/update_booking.json', 'utf-8'));

let token: string;
let bookingId: number;

test('Create Booking with Token', async ({ request }) => {
  const authRes = await request.post('/auth', { data: tokenPayload });
  expect(authRes.status()).toBe(200);
  const authBody = await authRes.json();
  expect(authBody).toHaveProperty('token');
  token = authBody.token;
  const createRes = await request.post('/booking', {
    data: createBookingData,
    headers: { 'Content-Type': 'application/json' },
  });
  expect(createRes.status()).toBe(200);
  const createBody = await createRes.json();
  expect(createBody).toHaveProperty('bookingid');
});

test('Retrieve Created Booking', async ({ request }) => {
  const createRes = await request.post('/booking', { data: createBookingData });
  expect(createRes.status()).toBe(200);
  const body = await createRes.json();
  bookingId = body.bookingid;
  const res = await request.get(`/booking/${bookingId}`);
  expect(res.status()).toBe(200);
});

test('Update Booking', async ({ request }) => {
  const createRes = await request.post('/booking', { data: createBookingData });
  expect(createRes.status()).toBe(200);
  const body = await createRes.json();
  bookingId = body.bookingid;
  const res = await request.put(`/booking/${bookingId}`, {
    data: updateBookingData,
    headers: {
      'Content-Type': 'application/json',
      Cookie: `token=${token}`
    },
  });
  expect(res.status()).toBe(200);
});

test('Delete Booking', async ({ request }) => {
  const authRes = await request.post('/auth', { data: tokenPayload });
  const authBody = await authRes.json();
  token = authBody.token;
  const createRes = await request.post('/booking', { data: createBookingData });
  const createBody = await createRes.json();
  bookingId = createBody.bookingid;
  const deleteRes = await request.delete(`/booking/${bookingId}`, {
    headers: {
      Cookie: `token=${token}`
    }
  });
  expect(deleteRes.status()).toBe(201);
});

test('Cannot Delete Already Deleted Booking', async ({ request }) => {
  const authRes = await request.post('/auth', { data: tokenPayload });
  const authBody = await authRes.json();
  token = authBody.token;
  const createRes = await request.post('/booking', { data: createBookingData });
  const createBody = await createRes.json();
  bookingId = createBody.bookingid;

  const firstDelete = await request.delete(`/booking/${bookingId}`, {
    headers: {
      Cookie: `token=${token}`
    }
  });
  expect(firstDelete.status()).toBe(201);

  const secondDelete = await request.delete(`/booking/${bookingId}`, {
    headers: {
      Cookie: `token=${token}`
    }
  });
  expect(secondDelete.status()).toBe(405);
});


// test.describe('Token generation with invalid credentials', () => {
//     const invalidCreds = [
//       { username: 'admin', password: 'invalid' },
//       { username: 'Admin', password: 'password123' },
//       { username: 'admin', password: 'PASSWORD123' },
//       { username: 'invalid', password: 'invalid123' }
//     ];
  
//     for (const creds of invalidCreds) {
//       test(`should not authenticate user: ${creds.username}`, async ({ request }) => {
//         const res = await request.post('/auth', {
//           data: { username: creds.username, password: creds.password },
//           headers: { 'Content-Type': 'application/json' },
//         });
//         expect(res.status()).toBe(200);
//         const body = await res.json();
//         expect(body).toHaveProperty('reason');
//       });
//     }
//   });
  