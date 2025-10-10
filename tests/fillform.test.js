import {test,expect} from '@playwright/test'
test.describe("suite to fill form",()=>{

    test("fill form and validate text",async({page})=>
    {
          test.setTimeout(120000); // 2 minutes
        await page.goto("https://www.w3schools.com/html/html_forms.asp",{ waitUntil: 'domcontentloaded', timeout: 120000 })
        await page.locator("//input[@id='fname' and @name='fname']").fill("Bala")
        await page.locator("//input[@id='lname' and @name='lname']").fill("Paithara")

        const[newPage]=await Promise.all([
            page.waitForEvent('popup'),
            await page.locator("(//input[@value='Submit'])[1]").click()
        ]);
         
       const text= await newPage.locator("//h1").textContent()
       console.log(text)
       if(text=='Submitted Form Data1')
       {
            console.log("found expected text")
       }
       else
       {
            console.error(` Test failed: `);
            
       }

    });

});