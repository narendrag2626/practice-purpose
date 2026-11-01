import { Locator, Page } from "@playwright/test";

export class HomePage{
    page:Page
    home_link:Locator
    contact_link:Locator
    AboutUs_link:Locator
    Login_link:Locator
    Signup_link:Locator
 constructor(page:Page)
{
    this.page=page
    this.home_link=this.page.getByRole('link',{name:'Home'})
    this.contact_link=this.page.getByRole('link',{name:'Contact'})
    this.AboutUs_link=this.page.getByRole('link',{name:'About us'})
    this.Login_link=this.page.getByRole('link',{name:'Log in'})
    this.Signup_link=this.page.getByRole('link',{name:'Sign up'})
}
   async home():Promise<void>
 {
    await this.home_link.click()  
 }  
   async contact():Promise<void> 
 { 
    await this.contact_link.click()
 }
  async Aboutus():Promise<void>  
 {
     await  this.AboutUs_link.click
 }
async loginlink():Promise<void>
 {
     await await this.Login_link.click()
 }
async signinlink():Promise<void>
 {
     await this.Signup_link.click()

 }
}

