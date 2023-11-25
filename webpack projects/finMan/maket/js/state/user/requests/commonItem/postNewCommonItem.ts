import { firebaseConfig } from '@js/firebase/firebaseInit';
import {
    TuserInfoCommonListItem,
    TuserInfoCommonListItemNames,
} from '@js/types/state/user/userState';
import axios from 'axios';

type Tprops = {
    userUid: string;
    monthKey: string;
    body: TuserInfoCommonListItem;
    type: TuserInfoCommonListItemNames;
};
export default async function postNewCommonItem({ userUid, monthKey, body, type }: Tprops) {
    let check = false;
    let key = '';
    await axios
        .post<{ name: string }>(
            `${firebaseConfig.databaseURL}/userList/${userUid}/monthList/${monthKey}/${type}List.json`,
            body,
        )
        .then(rez => {
            check = true;
            key = rez.data.name;
        });
    if (check) {
        return { body, key };
    }
}
