import { test as base } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { LoginPage } from '../pages/loginpage';

type MyFixtures = {
  homepage: HomePage;
  loginpage:LoginPage

}
export const test = base.extend<MyFixtures>({
  homepage: async ({ page }, use) => {
    const homepage = new HomePage(page);
    await use(homepage);
  },
  loginpage:async({page},use) =>{
    const loginpage=new LoginPage(page)
    await use(loginpage)
  }


})
test.beforeEach(async({page})=>{
  await page.goto('/')
})
test.afterEach(async({page})=>{
  await page.close()
})