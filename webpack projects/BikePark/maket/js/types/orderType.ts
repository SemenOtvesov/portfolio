import { Tpoints, TtypeRentDate, TtypeRentPlase } from "./state/calendarsTypes"
import { TtypePayment } from "./state/rentStateTypes"

export type TorderList = Array<Torder>
export interface Torder extends TcreateOrder {
    orderId: string,
    user: TuserOrderParam & {
        uid: string
    }
}
export type TcreateOrder = {
    points: Tpoints,
    typeRentDate: TtypeRentDate,
    typePayment: TtypePayment,
    typeRentPlase: TtypeRentPlase,
    bikeRentList: number[],
    prise: number,
    deliveryState: TdeliveryState,
    paidState: TorderPaidState,
    user: TuserOrderParam
}
export type TdeliveryState = "processing" | 'delivered' | 'work' | 'completed'
export type TorderPaidState = 'paid'  | 'unpaid'
export type TuserOrderParam = {
    startAdres: string,
    finAdres: string,
    nameUser: string,
    tel: string
}