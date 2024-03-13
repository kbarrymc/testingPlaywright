import { test } from '@playwright/test';
import { afterEach } from 'node:test';
import { URL } from 'url';
const {SampleAppPage}  = require('../pages/sample-app.page');
const {TextInputPage}  = require('../pages/Text-input-page');
const {HelperPage} = require('../pages/helper-Page');


test.describe.parallel('sample app tests',() => {

test('login success', async ({page}) => {
  const SampleApplogin = new SampleAppPage(page)
   const Helper =  new HelperPage(page)
  // const TextInput = new TextInputPage(page)
await SampleApplogin.navigateToHomePage()
await SampleApplogin.fillUserName('Baz');
await SampleApplogin.fillPasswordField('pwd');
await SampleApplogin.login()
await SampleApplogin.expectedMsg("Welcome, Baz!")
//await Helper.screenshot('login success')
});

test ('logout success', async ({page}) => {
  const SampleApp = new SampleAppPage(page)
  const Helper =  new HelperPage(page)

await SampleApp.navigateToHomePage()
await SampleApp.fillUserName('Baz');
await SampleApp.fillPasswordField('pwd')
await SampleApp.login()
await SampleApp.logout()
await SampleApp.expectedMsg('User logged out.')
await Helper.screenshot('Successful Logout')


});

test('no username test', async ({page}) => {
const SampleApp = new SampleAppPage(page)
const Helper =  new HelperPage(page)


await SampleApp.navigateToHomePage()
await SampleApp.fillPasswordField("pwd")
await SampleApp.login()
await SampleApp.expectedMsg("Invalid username/password")
await Helper.screenshot('No username entered, login unsuccessful')
console.log(await page.title())
});


});
// test('enter text for button', async ({page}) => {
// this.SampleApp = new SampleAppPage(page)
// const Helper =  new HelperPage(page)


// })


