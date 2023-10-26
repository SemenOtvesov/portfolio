import { firebaseConfig } from "@js/firebaseFolder/firebaseInit"
import axios from "axios"

export default async (id: number, userUid: string)=>{
    if(userUid && id){
        let check = false
        await axios.post(`${firebaseConfig.databaseURL}userList/${userUid}/selectBikeList.json`, id).then(res=>check=true)
        return check ? id : undefined
    }
}