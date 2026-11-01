// import{Locator, Page, test} from '@playwright/test'
// export class SignUpPage{
//     page:Page
//     signuplink:Locator
//     username:Locator
//     password:Locator
//     signinbutton:Locator
//     //closebutton:Locator
// constructor(page:Page)
// {
//     this.page=page
//     this.signuplink=this.page.getByRole('link',{name:'Sign up',exact:true})
//     this.username=this.page.locator("#sign-username")
//     this.password=this.page.locator("#sign-password")
//     this.signinbutton=this.page.getByRole('button',{name:'Sign up'})
//    // this.closebutton=this.page.getByRole('button',{name:'Close'})
// }
// async signup(username:string,password:string):Promise<void>
// {
//     await this.signuplink.click()
//     await this.username.fill(username)
//     await this.password.fill(password)
//     await this.signinbutton.click()
//     //await this.closebutton.click()

// }
// }