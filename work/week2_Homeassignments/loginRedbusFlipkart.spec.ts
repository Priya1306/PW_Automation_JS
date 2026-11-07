/*Assignment Details:
Task:
Your task is to launch two separate browser instances using Playwright:
1. Load Red Bus in an Edge browser instance and verify the page title and URL.
2. Load Flipkart in a Webkit browser instance and verify the page title and URL. */

    import { chromium, webkit, test } from '@playwright/test';
    test('learn to Redbus in edge and Flipkart in webkit', async () => {
        //launch edge
        let edgebrowser = await chromium.launch({ 
            channel: 'msedge',
            headless: false 
        })
        //launch webkit
        let webkitbrowser = await webkit.launch({
            headless: false 
        })


        let edgecontext = await edgebrowser.newContext()
        let edgepage = await edgecontext.newPage()

        await edgepage.goto('https://www.redbus.in')
        console.log(edgepage.url());
        await edgepage.waitForLoadState('domcontentloaded');
        let edgetitle = await edgepage.title()
        console.log(edgetitle);

        
        let webkitcontext = await webkitbrowser.newContext()
        let webkitpage = await webkitcontext.newPage()

        await webkitpage.goto('https://www.flipkart.com')
        console.log(webkitpage.url());
        await webkitpage.waitForLoadState('domcontentloaded');
        let webkittitle = await webkitpage.title()
        console.log(webkittitle);   
        
    })
/*to run in all browser project use command 
npx playwright test loginRedbusFlipkart.spec.ts
to run only in particular browser use command
npx playwright test loginRedbusFlipkart.spec.ts --project=chromium
*/