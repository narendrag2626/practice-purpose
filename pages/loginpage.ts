import { Page,Locator } from "@playwright/test";
export class LoginPage{
    page:Page
    loginlink:Locator
    loginusername:Locator
    loginpassword:Locator
    loginbutton:Locator
    welcomelink:Locator
    logoutlink:Locator

    signuplink:Locator
    username:Locator
    password:Locator
    signinbutton:Locator
   
    constructor(page:Page)
    {
       this.page=page
       this.loginlink= this.page.getByRole('link',{name:'Log in',exact:true})
       this.loginusername = this.page.locator("#loginusername")
       this.loginpassword=this.page.locator("#loginpassword")
       this.loginbutton=this.page.getByRole('button',{name:'Log in'})
       this.welcomelink=this.page.locator("#nameofuser")
       this.logoutlink=this.page.getByRole('link',{name:'Log out'})

       this.signuplink=this.page.getByRole('link',{name:'Sign up',exact:true})
       this.username=this.page.locator("#sign-username")
       this.password=this.page.locator("#sign-password")
       this.signinbutton=this.page.getByRole('button',{name:'Sign up'})
    }
    async login(username:string,password:string):Promise<string>
    {
        await this.loginlink.click()
        await this.loginusername.fill(username)
        await this.loginpassword.fill(password)
        await this.loginbutton.click()
        await this.welcomelink.waitFor({state:'visible'})
       let welcomeMessage:string= await this.welcomelink.textContent()
       return welcomeMessage

    
    }
    async signup(username:string,password:string):Promise<void>
   {
    await this.signuplink.click()
    await this.username.fill(username)
    await this.password.fill(password)
    this.page.once('dialog',async dialog =>{
      console.log(dialog.message())
      await dialog.accept()
    })
    await this.signinbutton.click()

   }
   async logout():Promise<void>
   {
      await this.logoutlink.click()
   }

}