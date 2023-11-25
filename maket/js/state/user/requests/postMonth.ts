import { firebaseConfig } from '@js/firebase/firebaseInit';
import { Tmonth, Tuser } from '@js/types/state/user/userState';
import axios from 'axios';

export default async (
    userUid: string,
    body: Tmonth,
): Promise<{ body: Tmonth; key: string } | undefined> => {
    let check = false;
    let key = '';
    await axios
        .post<{ name: string }>(
            `${firebaseConfig.databaseURL}/userList/${userUid}/monthList.json`,
            body,
        )
        .then(rez => {
            check = true;
            key = rez.data.name;
        });
    if (check) {
        return { body, key };
    }
};
