import { firebaseConfig } from '@firebaseInit';
import { Car, TbrandList, Tcountry } from '@locTypes/state/carState';
import { TurlParams } from '@locTypes/urlPath';
import axios from 'axios';

export default async (params: TurlParams, country: Tcountry) => {
    const url = `${firebaseConfig.databaseURL}listLots/${country}/${params.brand}.json?orderBy="id"&equalTo=${params.lot}`;
    const res = await axios.get<{ [a: number]: Car }>(url);
    if (res.data) {
        return Object.values(res.data)[0];
    }
};
