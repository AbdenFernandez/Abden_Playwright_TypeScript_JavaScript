import { test, expect } from '@playwright/test';
test('/ test', async ({ request }) => {
  const res = await request.get('/');
  expect(res.ok()).toBeTruthy();
  const body = await res.body();
  expect(body.toString()).toBe('Hello world');
});
test.skip('/:name test', async ({ request }) => {
  [
    'Aaryan', 'Arush', 'Kirti'
  ].forEach(async (name) => {
    const res = await request.get(`/${name}`);
    expect(res.ok()).toBeTruthy();
    const body = await res.body();
    expect(body.toString()).toBe(`Hello ${name}`);
  })
});
test('/login test', async ({ request }) => {
  const res = await request.post('/login', {
    data: {
      username: 'aryan',
      pass: 123
    }
  });
  expect(res.ok()).toBeTruthy();
  const body = await res.body();
  expect(body.toString()).toBe('Login success');
});