const { expect } =require ('@playwright/test');

exports.HomePage = class HomePage  {
    constructor(page) {
        this.page = page
        this.homePageURL = page.goto('');
    }
        async navToHomePage() {
            await this.homePageURL
        }
    }
