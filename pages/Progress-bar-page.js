const { expect } =require ('@playwright/test');

exports.ProgressBarPage = class ProgressBarPage  {
    constructor(page) {
        this.page = page
        this.startBtn = page.locator('#startButton')
        this.stopBtn = page.locator('#stopButton')
        this.progressNum = page.locator('#progressBar')
        this.valueUrl = page.goto('/progressbar')
    }
    async gotoURL() {
        await this.valueUrl
    }

    async clickStart() {
        await this.startBtn.click()
    }

    async clickStop() {
        await this.stopBtn.click()
    }

    async progressBarPercent(value) {    
       while(await this.progressNum.innerText() !== `${value+'%'}`) {
        console.log(`the value is ${await this.progressNum.innerText()}`);
        
        }
            console.log(`the value is ${await this.progressNum.innerText()}`);
            await this.stopBtn.click()
        }
    }
