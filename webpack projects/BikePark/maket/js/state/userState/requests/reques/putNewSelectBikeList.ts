import { firebaseConfig } from "@js/firebaseFolder/firebaseInit"
import axios from "axios"

export default async (selectList: number[], userUid: string)=>{
    if(userUid){
        let check = false
        await axios.put(`${firebaseConfig.databaseURL}userList/${userUid}/selectBikeList.json`, selectList).then(res=>check=true)
        return check ? selectList : undefined
    }
}