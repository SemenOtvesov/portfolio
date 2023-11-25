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
    id: string;
};
export default async function putCommonItem({ userUid, monthKey, body, type, id }: Tprops) {
    let check = false;
    await axios
        .put(
            `${firebaseConfig.databaseURL}/userList/${userUid}/monthList/${monthKey}/${type}List/${id}.json`,
            body,
        )
        .then(rez => (check = true));
    if (check) {
        return body;
    }
}
