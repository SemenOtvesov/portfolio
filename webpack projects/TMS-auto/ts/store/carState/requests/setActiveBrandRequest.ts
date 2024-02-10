import { firebaseConfig } from '@firebaseInit';
import { Car, Tcountry } from '@locTypes/state/carState';
import axios from 'axios';

type Tprops = {
    brand: string;
    start: number;
    limit: number;
};

export default async ({ brand, start, limit }: Tprops) => {
    let koreaReqCheck = true;
    let res: { arr: Car[]; country: Tcountry } = { arr: [], country: 'japan' };

    await axios.get<Car[]>(requestLine({ country: 'japan', brand, start, limit })).then(rez => {
        if (rez.data && Object.values(rez.data)[0]) {
            koreaReqCheck = false;
        }
        res = { arr: rez.data, country: 'japan' };
    });

    if (koreaReqCheck) {
        await axios
            .get<Car[]>(requestLine({ country: 'korea', brand, start, limit }))
            .then(rez => (res = { arr: rez.data, country: 'korea' }));
    }
    return res;
};

type TrequestLine = {
    brand: string;
    start: number;
    limit: number;
    country: Tcountry;
};

function requestLine({ country, brand, limit, start }: TrequestLine) {
    return `${
        firebaseConfig.databaseURL
    }listLots/${country}/${brand}.json?orderBy="$key"&startAt="${start}"&endAt="${start + limit}"`;
}
