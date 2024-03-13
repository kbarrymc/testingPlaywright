import { test } from '@playwright/test';
const {HomePage} = require ('../pages/home-Page')
//const homePage = new HomePage(page)

test ('login success', async ({page}) => {
    const homepage = new HomePage(page)
    await homepage.navToHomePage()
    console.log(await page.locator('a').evaluateAll((elements) => elements.map((el) => el.textContent)))
})