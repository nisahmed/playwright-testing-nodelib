import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/basePage';

class HomePage extends BasePage {
    async getHeaderText() {
        return await this.page.textContent('h1');
    }
}

test.describe('UI Tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigateTo('https://example.com');
    });

    test.skip('should display the correct header', async () => {
        const headerText = await homePage.getHeaderText();
        expect(headerText).toBe('Expected Header Text');
    });

    // Add more UI tests as needed
});