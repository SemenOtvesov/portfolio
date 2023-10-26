import { TtypePayment } from "@js/types/state/rentStateTypes"

export type TrentForm = {
    startAdresInput: string
    finAdresInput: string,
    nameInput: string,
    payment: TtypePayment
    telInput: string
}
export type TrentFormInputNames = "startAdresInput" | "finAdresInput" | "nameInput" | "payment" | "telInput"