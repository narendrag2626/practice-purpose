import{test} from '../fixtures/testfixures'
import { expect } from '@playwright/test'
import {updateprofiledata} from '../testdata/testdata.json'
let email=updateprofiledata.email
let password=updateprofiledata.password
let profilepath=updateprofiledata.profilepath

test("verify profile pic update feature",async({loginpage})=>{
    await loginpage.updateprofile(email,password,profilepath)
})