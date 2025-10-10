import {test,expect} from '@playwright/test'
test.describe("frame suite",()=>
{
    test("frame test",async({page})=>
    {
        await page.goto("https://demoqa.com/frames")
        const frame1 = page.frameLocator("//iframe[@id='frame1']");
        const textInFrame = await frame1.locator("//h1[@id='sampleHeading']").innerText();
        console.log(textInFrame)
        expect(textInFrame).toEqual("This is a sample page1")
    })
})