import { firebaseConfig } from '@firebaseInit';
import { Car, TbrandList } from '@locTypes/state/carState';
import axios from 'axios';

export type TrendomModelResponse = { japan: Car[]; korea: Car[] };

export default async (brandList: TbrandList) => {
    let japanCar: Car[] = [];
    let koreaCar: Car[] = [];
    const reqArr = randomFn(brandList);
    for (const key of reqArr) {
        const url = `${firebaseConfig.databaseURL}listLots/${key.loc}/${key.brand}.json?orderBy="$key"&startAt="0"&endAt="9"`;
        await axios.get<Car[]>(url).then(response => {
            if (key.loc === 'japan') {
                japanCar = [...japanCar, ...Object.values(response.data)];
            }
            if (key.loc === 'korea') {
                koreaCar = [...koreaCar, ...Object.values(response.data)];
            }
        });
    }
    return { japan: japanCar, korea: koreaCar };
};

function randomFn(obj: TbrandList) {
    const newObj: TbrandList = [];
    const randomCheck: number[] = [];
    for (let i = 0; randomCheck.length < 5; i++) {
        const num = Math.round(Math.random() * 10);
        if (obj[num] && !randomCheck.includes(num)) {
            randomCheck.push(num);
        }
    }
    randomCheck.forEach(el => newObj.push(obj[el]));
    return newObj;
}
