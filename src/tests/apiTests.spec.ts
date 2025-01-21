import { test, expect } from '@playwright/test';
import { ApiClient } from '../api/apiClient';

const apiClient = new ApiClient('https://openlibrary.org');

test.describe('API Tests', () => {
  
  // Test to verify that a GET request returns a 200 status and a valid response
  test.only('GET request should return 200 and valid response', async () => {
    const response = await apiClient.get('/search.json?q=the+lord+of+the+rings');
    expect(response.status).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.docs).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                title: expect.stringContaining('Lord of the Rings Trivia : the Lord of the Rings Facts and Quizzes')
            })
        ])
    );
  });

  // Test to verify that a POST request creates a resource and returns a 201 status
  test.skip('POST request should create a resource and return 201', async () => {
    const data = { name: 'Test' };
    const response = await apiClient.post('/endpoint', data);
    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('id');
  });

  // Test to verify that a PUT request updates a resource and returns a 200 status
  test.skip('PUT request should update a resource and return 200', async () => {
    const data = { name: 'Updated Test' };
    const response = await apiClient.put('/endpoint/1', data);
    expect(response.status).toBe(200);
    expect(response.data.name).toBe('Updated Test');
  });

  // Test to verify that a DELETE request removes a resource and returns a 204 status
  test.skip('DELETE request should remove a resource and return 204', async () => {
    const response = await apiClient.delete('/endpoint/1');
    expect(response.status).toBe(204);
  });

});