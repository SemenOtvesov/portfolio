import { TorderList } from "../orderType"
import { Tpoints, TstateCalendars, TtypeRentDate, TtypeRentPlase } from "./calendarsTypes"
import { TrentState, TtypePayment } from "./rentStateTypes"

export interface userStateInterfase {
    userRouter: {
        user: Iuser,
        userInfo: {}
        userUid: string | undefined,
    },
    rentRouter: TrentState,
    calendarsRouter: TstateCalendars
}

export type TuserUid = string | undefined

export type TuserState = {
    user: Iuser, 
    userInfo: {},
    userUid: undefined | string
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
    selectBikeList?: TselectBikeList,
    orderList?: TorderList
}

export type TselectBikeList = number[]