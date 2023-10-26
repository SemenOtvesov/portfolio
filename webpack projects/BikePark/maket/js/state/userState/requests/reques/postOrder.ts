import { firebaseConfig } from "@js/firebaseFolder/firebaseInit";
import { Torder } from "@js/types/orderType";
import axios from "axios";

type Tprops = {
    uid: string | undefined,
    key: string,
    order: Torder 
}

export default async ({order, uid, key}: Tprops)=>{
    await axios.put(`${firebaseConfig.databaseURL}userList/${uid}/orderList/${key}.json`, order)
}