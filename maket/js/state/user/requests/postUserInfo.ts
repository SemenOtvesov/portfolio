import { firebaseConfig } from '@js/firebase/firebaseInit';
import { TuserInfo } from '@js/types/state/user/userState';
import axios from 'axios';

type Tprops = {
    userUid: string;
    userInfo: TuserInfo;
};

export default async ({ userUid, userInfo }: Tprops) => {
    let check = false;
    await axios
        .put(`${firebaseConfig.databaseURL}/userList/${userUid}.json`, userInfo)
        .then(res => (check = true))
        .catch(res => (check = false));
    if (check) {
        return userInfo;
    }
};
