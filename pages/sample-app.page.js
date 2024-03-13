const { expect } =require ('@playwright/test');
exports.SampleAppPage = class SampleAppPage {
    constructor(page) {
this.page = page
this.usernameField = page.getByPlaceholder('User Name')
this.passwordField = page.getByPlaceholder('********')
this.loginBtn = page.getByRole('button', {name: 'Log In'})
this.welcomeMsg = page.locator("#loginstatus")
this.logoutBtn = page.getByRole ('button', {name: 'Log Out'})
this.url= page.goto('/sampleapp')

    }

async navigateToHomePage() {
    await this.url
}
async fillUserName(username)  {
    await this.usernameField.fill(username)
}
async fillPasswordField(password) {
    await this.passwordField.fill(password)
}
async login() {
    await this.loginBtn.click()
}
async logout() {
    await this.logoutBtn.click()
}
async expectedMsg(text) {
    await expect(this.welcomeMsg).toHaveText(text)
    }

}