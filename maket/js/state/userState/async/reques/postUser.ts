import { firebaseConfig } from "@js/firebaseFolder/firebaseInit";
import { TuserUid } from "@js/types/state/userStateTypes";
import axios from 'axios'

export default async function postUser(userUid: TuserUid, userInfo: {}){
    return await axios.put(`${firebaseConfig.databaseURL}userList/${userUid}.json`, userInfo)
}