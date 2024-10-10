import {test,expect} from "@playwright/test";
import { LoginTestPage } from "./Pages/LoginTestPage";

test ('loginTest',async({page})=>{
 const sampleTest= new LoginTestPage(page);
 await sampleTest.gotoLoginPage();
 await sampleTest.selectLoginLink('dperomy@outlook.com','india1981');
 await page.waitForTimeout(2000);
})