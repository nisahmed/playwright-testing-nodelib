import { test, expect } from '@playwright/test';
import { DbClient } from '../db/dbClient';

const dbClient = new DbClient();

test.beforeAll(async () => {
    await dbClient.connect();
});

test.afterAll(async () => {
    await dbClient.disconnect();
});

test.skip('should execute a query and return results', async () => {
    const result = await dbClient.executeQuery('SELECT * FROM users');
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
});

test.skip('should insert a new record', async () => {
    const insertQuery = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id';
    const values = ['John Doe', 'john.doe@example.com'];
    const result = await dbClient.executeQuery(insertQuery, values);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBeDefined();
});

test.skip('should delete a record', async () => {
    const deleteQuery = 'DELETE FROM users WHERE email = $1';
    const values = ['john.doe@example.com'];
    const result = await dbClient.executeQuery(deleteQuery, values);
    expect(result).toBeDefined();
});