import {test,expect} from '@playwright/test'
test.describe("suite to validate dropdown",()=>{
test("test to validate dropdown",async({page})=>{

    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select",{ waitUntil: 'domcontentloaded', timeout: 120000 })
    const frame=page.frameLocator("//iframe[@id='iframeResult']")
    await frame.locator("//select[@id='cars']").selectOption("Volvo")
    await page.waitForTimeout(30000)
    await frame.locator("//input[@value='Submit']").click()
 

});

});