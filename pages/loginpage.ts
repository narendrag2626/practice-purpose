import { Page,Locator } from "@playwright/test";
export class LoginPage{
   page:Page
   forgetpasswordlink:Locator
   emailinput:Locator
   contactnumberinput:Locator
   dateofbirthinput:Locator
   submitbutton:Locator
   newpasswordinput:Locator
   finalsubmitbutton:Locator
   successmessagealert:Locator

   loginemailinput:Locator
   loginpasswordinput:Locator
   signinbuttoninlogin:Locator
   gearicon:Locator
   myprofilelink:Locator
   profilepic:Locator
   updatebutton:Locator
 
   logoutlink:Locator
   
    constructor(page:Page)
    {
       this.page=page
       this.forgetpasswordlink=this.page.getByRole('link',{name:"I forgot my password"})
       this.emailinput=this.page.getByPlaceholder("Email")
       this.contactnumberinput=this.page.getByPlaceholder("Contact Number")
       this.dateofbirthinput=this.page.getByPlaceholder("Date of Birth in DD-MM-YYYY")
       this.submitbutton=this.page.getByRole('button',{name:"Submit"})
       this.newpasswordinput=this.page.getByPlaceholder("Password")
       this.finalsubmitbutton=this.page.locator(".btn.btn-primary.btn-block.btn-flat")
       this.successmessagealert=this.page.locator(".alert.alert-success.alert-dismissable")

       this.loginemailinput=this.page.getByPlaceholder("Email ID")
       this.loginpasswordinput=this.page.getByPlaceholder("Password")
       this.signinbuttoninlogin=this.page.getByRole('button',{name:"Sign In"})
       this.gearicon=this.page.locator(".fa.fa-gear")
       this.myprofilelink=this.page.getByRole('link',{name:"My Profile"})
       this.profilepic=this.page.locator("#profile_pic")
       this.updatebutton=this.page.getByRole('button',{name:"Update"})

       this.logoutlink=this.page.getByRole('link',{name:" Logout"}) 
    }
   
   
   async forgotPassword(email:string,contactnumber:string,dateofbirth:string,newpassword:string):Promise<void>
   {
      await this.forgetpasswordlink.click()
      await this.emailinput.fill(email)
      await this.contactnumberinput.fill(contactnumber)
      await this.dateofbirthinput.fill(dateofbirth)
      await this.submitbutton.click()
      await this.newpasswordinput.fill(newpassword)
      await this.finalsubmitbutton.click()

   }
   async updateprofile(email:string,password:string,profilepath):Promise<void>
   {
     await this.loginemailinput.fill(email)
     await this.loginpasswordinput.fill(password)
     await this.signinbuttoninlogin.click()
     await this.gearicon.click()
     await this.myprofilelink.click()
     await this.profilepic.setInputFiles(profilepath)
     await this.updatebutton.click()

   }
   async clickLogout(email:string,password:string):Promise<void>
   {
     await this.loginemailinput.fill(email)
     await this.loginpasswordinput.fill(password)
     await this.signinbuttoninlogin.click()
     await this.gearicon.click()
     await this.logoutlink.click()
   }

}