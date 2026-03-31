import { test, expect } from './fixtures';

test.describe('Auth', () => {

  test('TC-01 auth exitoso devuelve token', async ({ request }) => {
    const response = await request.post('/auth', {
      data: { username: 'admin', password: 'password123' },
    });

    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data).toHaveProperty('token');
    expect(data.token.length).toBeGreaterThan(0);
  });

  test('TC-02 credenciales inválidas devuelven error', async ({ request }) => {
    const response = await request.post('/auth', {
      data: { username: 'wrong', password: 'wrong' },
    });

    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data.reason).toBe('Bad credentials');
  });

});