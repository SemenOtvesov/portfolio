import { TorderList } from "../orderType"
import { TstateCalendars } from "./calendarsTypes"
import { TrentState } from "./rentStateTypes"

export interface userStateInterfase {
    userRouter: TuserState,
    rentRouter: TrentState,
    calendarsRouter: TstateCalendars
}

export type TuserUid = string | undefined

export type TuserState = {
    user: Iuser, 
    userInfo: {},
    userUid: undefined | string,
    deleteOrderId: null | string
}
export type TprevState = {userRouter?: TuserState}

export interface Ilogin{
    userUid: TuserUid,
    userInfo: {},
}

export interface Iuser {
    name?: string,
    mail?: string,
    pass?: string,
    phone?: string,
    addressDelivery?: string,
    selectBikeList?: TselectBikeList,
    orderList?: TorderList
}

export type TselectBikeList = number[]