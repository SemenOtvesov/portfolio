import { firebaseConfig } from "@js/firebaseFolder/firebaseInit"
import axios from "axios"

export default async (uid: string, orderId: string)=>{
    let check = undefined
    await axios.delete(`${firebaseConfig.databaseURL}userList/${uid}/orderList/${orderId}.json`).then(rez=>check = orderId)
    return check
}