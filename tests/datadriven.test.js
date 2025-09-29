import { test, expect } from '@playwright/test';

const loginData =[

{parameter1:"first",parameter2:"second"},
{parameter1:"third",parameter2:"fourth"}
];

for (const data of loginData) {
    test(`Data driven test with parameter1 ${data.parameter1} and parameter2 ${data.parameter2}`, async ({ page }) => {
        console.log (`Running test with ${data.parameter1} and ${data.parameter2}`);

     } );
    
}