import { LoginPage } from '../pages/loginpage'
//import { SignUpPage } from '../pages/signuppage'
import {test} from "../fixtures/testfixures"
import { HomePage } from '../pages/homepage'
import { expect } from '@playwright/test'
//import { Page } from 'playwright/test'
import {logindata} from '../testdata/testdata.json'
import{signupdata} from '../testdata/testdata.json'
let username = logindata.username
let password = logindata.password
let uname=signupdata.uname
let upwd=signupdata.upwd
// test.skip('url test using environmental variables',async({page})=>{
//     await page.goto('/')
//     //const signuptry=new SignUpPage(page)
//     //await  signuptry.signup("sandeep","8179899378")
//     const try1=new LoginPage(page)
//    await try1.login("sandeep","8179899378")
// })
test.describe.serial("verify signup and login",async()=>{
  test("verify user registration",async({loginpage})=>{
    await loginpage.signup(uname,upwd)
})
test('verify login with valid credentials',async({homepage,loginpage})=>{
    let actualresult=await loginpage.login(username,password)
    //expect(actualresult).toContain(username)
    expect(actualresult).toBe(`Welcome ${uname}`) 
    await loginpage.logout()
})
})
// test("verify user registration",async({loginpage})=>{
//     await loginpage.signup(uname,upwd)
// })
// test('verify login with valid credentials',async({homepage,loginpage})=>{
//     let actualresult=await loginpage.login(username,password)
//     //expect(actualresult).toContain(username)
//     expect(actualresult).toBe(`Welcome ${username}`)
//     console.log(actualresult)
//     await loginpage.logout()
// })

    
