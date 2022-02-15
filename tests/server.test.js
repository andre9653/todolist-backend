const request = require('supertest');
const app = require('../src/server');

describe('teste 1', () => {
  test('Servidor online', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
