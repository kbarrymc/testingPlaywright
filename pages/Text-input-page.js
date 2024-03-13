const { expect, test} =require ('@playwright/test');
exports.TextInputPage = class TextInputpage {
    constructor(page) {
this.page = page
this.buttonText = page.getByPlaceholder('MyButton')
this.buttonName= page.locator('#updatingButton')
this.url= page.goto('/textinput')

    }

    async navigateToHomePage() {
        await this.url
    }

    async addText(text) {
        await this.buttonText.fill(text)
    }
    async createBtn() {
        await this.buttonName.click()
        
    }

    async compareText(text) {
        await expect(this.buttonName).toHaveText(text)
        }
 
    async screenshot (name) {
    const screenshotFldr = './screenshots'
    await this.page.screenshot({path: './screenshots/' + name +'.png'})
        }
    }