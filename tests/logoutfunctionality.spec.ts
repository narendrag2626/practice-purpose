import{test} from '../fixtures/testfixures'
import {updateprofiledata} from '../testdata/testdata.json'
let email=updateprofiledata.email
let password=updateprofiledata.password
test("verify logout functiionality in applications",async({loginpage})=>{
    await loginpage.clickLogout(email,password)
})