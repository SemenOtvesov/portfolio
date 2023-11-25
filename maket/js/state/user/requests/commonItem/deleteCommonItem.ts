import { firebaseConfig } from '@js/firebase/firebaseInit';
import { TuserInfoCommonListItemNames } from '@js/types/state/user/userState';
import axios from 'axios';
import { m } from 'framer-motion';

type Tprops = {
    monthKey: string;
    userUid: string;
    type: TuserInfoCommonListItemNames;
    id: string;
};
export default async function deleteCommonItem({ userUid, monthKey, type, id }: Tprops) {
    let check = false;
    await axios
        .delete(
            `${firebaseConfig.databaseURL}/userList/${userUid}/monthList/${monthKey}/${type}List/${id}.json`,
        )
        .then(rez => (check = true));
    return check;
}
