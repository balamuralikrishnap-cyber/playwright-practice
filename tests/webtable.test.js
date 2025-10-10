import {expect,test} from '@playwright/test'
test.describe("suite for webtable",()=>
{
  test("webtable test", async({page})=>
    
    {
        await page.goto("https://demoqa.com/webtables")
        const rows = page.locator('//div[@class="rt-tbody"]/div[contains(@class,"rt-tr-group")]');
        const rowCount = await rows.count();
         let nonEmptyCount = 0;
        for (let i = 0; i < rowCount; i++) {
         const text = (await rows.nth(i).innerText()).trim();
        if (text !== '') nonEmptyCount++;
        }
       const col=await rows.nth(1).locator("//div[@role='gridcell']")
       const colcount=await col.count();
       console.log(colcount);
      for(let i=0;i<nonEmptyCount;i++)
      {
        
        for(let j=0;j<colcount;j++)
        {
            
            const coltext=await (await rows.nth(i).locator("//div[@role='gridcell']").nth(j).innerText()).trim()
            console.log(coltext)
        }
      }
        await page.locator("//div[@class='action-buttons']/span[@class='mr-2']").nth(1).click();
        await page.waitForTimeout(30000)

    })
  
 
})