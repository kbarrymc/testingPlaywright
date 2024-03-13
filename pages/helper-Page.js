   
   const { expect, test } = require ('@playwright/test');
   exports.HelperPage = class HelperPage {
       constructor(page) {
     this.page= page
       }
     async screenshot (name) {
   
        await this.page.screenshot({path: './screenshots/' + name +'.png'})
            }
    }