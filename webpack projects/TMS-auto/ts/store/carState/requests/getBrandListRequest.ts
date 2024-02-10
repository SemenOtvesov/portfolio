import { firebaseConfig } from '@firebaseInit';
import { TbrandList } from '@locTypes/state/carState';
import axios from 'axios';

export default async () => {
    const res = await axios.get<TbrandList>(`${firebaseConfig.databaseURL}listLots/brandList.json`);
    if (res.data) {
        return res.data;
    }
};
