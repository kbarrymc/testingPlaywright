const { expect } =require ('@playwright/test');

exports.HomePage = class HomePage  {
    constructor(page) {
        this.page = page
        this.homePageURL = page.goto('/dynamictable');
        this.getCells = page.locator('css={role="cell"]')
        this.getHeaders = page.locator('css={role="columnheader"]')

    }
        async navToHomePage() {
            await this.homePageURL
        }
    }