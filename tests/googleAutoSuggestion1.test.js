import{expect,test} from '@playwright/test'
test.describe("google autosuggestion practice suite",()=>
{
    test("google auto suggestion practice test", async({page})=>{
        await page.goto("http://google.com")
        await page.waitForLoadState('load');
        await page.locator("//textarea[@name='q']").fill("Selenium")
        //await page.waitForSelector("//ul[@role='listbox']/li[@role='presentation']",{ state: 'visible' })
        await expect(page.locator("//ul[@role='listbox']/li[@role='presentation']").first()).toBeVisible()
        const autoSuggestions=await page.locator("//ul[@role='listbox']/li[@role='presentation']")
        const suggestionCount=await autoSuggestions.count();
        console.log(suggestionCount)
        for(let i=0;i<suggestionCount;i++)
           console.log(await autoSuggestions.nth(i).innerText()) 
    })
})