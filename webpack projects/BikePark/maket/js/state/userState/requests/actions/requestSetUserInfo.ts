import { TuserInfoForm } from "@js/components/middleComponents/account/userInfoContent/formTypes";
import { userStateInterfase } from "@js/types/state/userStateTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import patchUserInfo from "../reques/patchUserInfo";

export type TcheckObj = {
    nameCheck: boolean;
    mailCheck: boolean;
    passCheck: boolean;
    phoneCheck: boolean;
    addressCheck: boolean;
}

export default createAsyncThunk('userRouter/requestSetUserInfo', async (newUserInfo: TuserInfoForm, {getState})=>{
    const state = getState() as userStateInterfase
    const uid = state.userRouter.userUid

    const stateName = state.userRouter.user.name
    const stateMail = state.userRouter.user.mail
    const statePass = state.userRouter.user.pass
    const statePhone = state.userRouter.user.phone
    const stateaAdressDelivery = state.userRouter.user.addressDelivery

    const {name, mail, pass, phone, adress} = newUserInfo

    const nameCheck = stateName !== name
    const mailCheck = stateMail !== mail
    const passCheck = statePass !== pass
    const phoneCheck = statePhone !== phone 
    const addressCheck = stateaAdressDelivery !== adress

    const accordance = nameCheck || mailCheck || passCheck ||  phoneCheck || addressCheck

    let checkRequest = false
    const checkObj: TcheckObj = {nameCheck, mailCheck, passCheck, phoneCheck, addressCheck}
    if(accordance){
        await patchUserInfo({
            uid,
            newUserInfo,
            checkObj
        }).then(rez=>checkRequest = true)
    }
    return checkRequest ? {newUserInfo, checkObj} : undefined
})