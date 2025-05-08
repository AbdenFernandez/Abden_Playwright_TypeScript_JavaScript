import { test, expect } from '@playwright/test';
import * as fs from 'fs';

const createData = JSON.parse(fs.readFileSync('./test-data/createData.json', 'utf-8'));
const updateData = JSON.parse(fs.readFileSync('./test-data/updateData.json', 'utf-8'));

let createdId: string;

test('POST /test/users - Create User', async ({ request }) => {
  const res = await request.post('/test/users', {
    data: createData
  });
  expect(res.status()).toBe(201);
  const body = await res.json();
  expect(body).toHaveProperty('id');
  createdId = body.id;
  console.log('Response:', body);
});

test('GET /test/users/:id - Retrieve Created User', async ({ request }) => {
  const res = await request.get(`/test/users/${createdId}`);
  expect(res.status()).toBe(200);
  console.log('Response:', await res.json());
});

test('PUT /test/users/:id - Update Created User', async ({ request }) => {
  const res = await request.put(`/test/users/${createdId}`, {
    data: updateData
  });
  expect(res.status()).toBe(200);
  console.log('Response:', await res.json());
});

test('DELETE /test/users/:id - Delete Created User', async ({ request }) => {
  const res = await request.delete(`/test/users/${createdId}`);
  expect(res.status()).toBe(200);
  console.log('Response:', await res.json());
});

test('DELETE /test/users/:id again - Ensure User is Gone', async ({ request }) => {
  const res = await request.delete(`/test/users/${createdId}`);
  expect(res.status()).toBe(404);
  console.log('Response:', await res.json());
});
