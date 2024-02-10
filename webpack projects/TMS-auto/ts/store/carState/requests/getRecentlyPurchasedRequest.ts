import { firebaseConfig } from '@firebaseInit';
import { Car } from '@locTypes/state/carState';
import axios from 'axios';

export default async () => {
    const res = await axios.get<Car[]>(
        `${firebaseConfig.databaseURL}listLots/recentlyPurchased.json`,
    );

    if (res.data) {
        return res.data;
    }
};
