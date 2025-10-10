import {test,expect} from '@playwright/test'
test.describe("suite to validate text in div tag",()=>
{
    test("test to validate text in div tag",async({page}) =>
    {
        await page.goto('https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp',{timeout:90000})
        await page.locator("//button[contains(text(),'Toggle Hide and Show')]").click()
        //const divText=await page.isVisible("//*[@id='main']/h2")
        const divText=await page.locator("//*[@id='main1']/h1").isVisible
        expect(divText).toBeTruthy();
    });

});