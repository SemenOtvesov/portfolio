import { firebaseConfig } from "@js/firebaseFolder/firebaseInit"
import { Iuser, TuserUid } from "@js/types/state/userStateTypes"
import axios from "axios"

export default async function fetchUser(userUid: TuserUid){
    return await axios.get<Iuser>(`${firebaseConfig.databaseURL}userList/${userUid}.json`).then(rez=>{
        if(rez.data != undefined){
            
            return {
                ...rez.data,
                selectBikeList: rez.data.selectBikeList ? Object.values(rez.data.selectBikeList) : [],
                orderList: rez.data.orderList ? Object.values(rez.data.orderList) : []
            }
        }
        return {}
    })
}