import { test, expect } from '@playwright/test';

test.describe('Token generation with invalid credentials', () => {
    const invalidCreds = [
      { username: 'admin', password: 'invalid' },
      { username: 'Admin', password: 'password123' },
      { username: 'admin', password: 'PASSWORD123' },
      { username: 'invalid', password: 'invalid123' }
    ];
  
    invalidCreds.forEach((creds) => {
        test(`should not authenticate user: ${creds.username} / ${creds.password}`, async ({ request }) => {
          const res = await request.post('/auth', {
            data: { username: creds.username, password: creds.password },
          });
          expect(res.status()).toBe(200);
          const body = await res.json();
          expect(body).toHaveProperty('reason');
          console.log('Response:', body);
        });
      });
      
  });
  