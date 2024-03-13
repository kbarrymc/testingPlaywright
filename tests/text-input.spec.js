import { test } from '@playwright/test';
import { afterEach } from 'node:test';
import { URL } from 'url';
const {TextInputPage}  = require('../pages/Text-input-page');
const {HelperPage} = require('../pages/helper-Page');


test ('compare text', async ({page}) => {
    const TextInput = new TextInputPage(page)
    const Helper =  new HelperPage(page)
  
    let text = 'testing'
    await TextInput.navigateToHomePage()
  
    await TextInput.addText('hello');
  await TextInput.createBtn();
  await TextInput.compareText('hello')
  await Helper.screenshot('testing')})
  