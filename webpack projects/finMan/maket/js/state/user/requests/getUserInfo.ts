import { firebaseConfig } from '@js/firebase/firebaseInit';
import { Tuser } from '@js/types/state/user/userState';
import axios from 'axios';

export default async (userUid: string): Promise<Tuser> => {
    const res = await axios.get<Tuser>(`${firebaseConfig.databaseURL}/userList/${userUid}.json`);
    return res.data;
};
