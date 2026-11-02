import {expect} from '@playwright/test'
import {test} from '../fixtures/testfixures'
import { LoginPage } from '../pages/loginpage'
import {changepassworddata} from '../testdata/testdata.json'
let email=changepassworddata.email
let contactnumber=changepassworddata.contactnumber
let dateofbirth=changepassworddata.dateofbirth
let newpassword=changepassworddata.newpassowrd
test("verify forgot password feauture",async({loginpage})=>{
  await loginpage.forgotPassword(email,contactnumber,dateofbirth,newpassword)
  await expect(loginpage.successmessagealert).toBeVisible()
})