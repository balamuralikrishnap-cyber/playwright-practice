import {test,expect} from '@playwright/test'
test.describe("test suite to perform operation on checkbox",()=>{
    test("test for checkbox",async({page})=>
    {
        page.goto("https://the-internet.herokuapp.com/checkboxes")
        const chkBox1=await page.locator("//input[@type='checkbox'][1]");
        const isChecked = await chkBox1.isChecked();
        console.log(isChecked)
        await chkBox1.check()
        const isCheckedAfter = await chkBox1.isChecked();
        console.log(isCheckedAfter)
        await chkBox1.uncheck()
        expect(chkBox1).not.toBeChecked()

    });

});