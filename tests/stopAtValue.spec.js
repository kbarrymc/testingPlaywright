import { test } from '@playwright/test';
import { ProgressBarPage} from '../pages/Progress-bar-page';
import { log } from 'console';

test.only ('Stop at given Value', async ({page}) => {
    // await page.pause()
 const progressBarPage = new ProgressBarPage(page)   
await progressBarPage.gotoURL()
await progressBarPage.clickStart()
await progressBarPage.progressBarPercent(96)

// while(await progressBarPage.progressBarPercent() !== '75%') {
//     console.log(`the value is ${await progressBarPage.progressBarPercent()}`);
// }
// await progressBarPage.clickStop()
// console.log(`The value is now ${await progressBarPage.progressBarPercent()}`)
// })
})