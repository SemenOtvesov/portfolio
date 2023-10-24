import { TuserInfoForm } from "@js/components/middleComponents/account/userInfoContent/formTypes"
import { firebaseConfig } from "@js/firebaseFolder/firebaseInit"
import axios from "axios"
import { TcheckObj } from "../actions/requestSetUserInfo"

type Tprops = {
    uid: string | undefined
    newUserInfo: TuserInfoForm,
    checkObj: TcheckObj
}
type Tdate = {
    name?: string, 
    mail?: string, 
    pass?: string, 
    phone?: string, 
    addressDelivery?: string
}
export default async ({newUserInfo, uid, checkObj}: Tprops)=>{
    const data: Tdate = {};
    checkObj.nameCheck && (data.name = newUserInfo.name)
    checkObj.mailCheck && (data.mail = newUserInfo.mail)
    checkObj.passCheck && (data.pass = newUserInfo.pass)
    checkObj.phoneCheck && (data.phone = newUserInfo.phone)
    checkObj.addressCheck && (data.addressDelivery = newUserInfo.adress)

    await axios.patch(`${firebaseConfig.databaseURL}userList/${uid}.json`, data)
}