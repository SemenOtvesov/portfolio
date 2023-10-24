import { TuserState } from "@js/types/state/userStateTypes"
import { TcheckObj } from "../../requests/actions/requestSetUserInfo"
import { TuserInfoForm } from "@js/components/middleComponents/account/userInfoContent/formTypes"

type Taction = { 
    payload: {
        newUserInfo: TuserInfoForm, 
        checkObj: TcheckObj
    } | undefined
}

export default (state: TuserState, action: Taction)=>{
    if(!action.payload){return}
    const checkObj = action.payload.checkObj
    const newUserInfo = action.payload.newUserInfo
    
    checkObj.nameCheck && (state.user.name = newUserInfo.name)
    checkObj.mailCheck && (state.user.mail = newUserInfo.mail)
    checkObj.passCheck && (state.user.pass = newUserInfo.pass)
    checkObj.phoneCheck && (state.user.phone = newUserInfo.phone)
    checkObj.addressCheck && (state.user.addressDelivery = newUserInfo.adress)
}