import { createAsyncThunk } from '@reduxjs/toolkit';
import { TrootState } from '@store/index';
import getRandomModelThunk from './getRandomModelThunk';
import { Car, TcarState } from '@locTypes/state/carState';
import { setActiveModelFast } from '..';

export default createAsyncThunk(
    'carState/setActiveModel',
    async (name: string, { getState, dispatch }) => {
        const state = getState() as TrootState;
        const list = state.carState.activeBrandObj;
        dispatch(setActiveModelFast(name.split(' ')[1]));

        if (list[0]) {
            return list.filter(el => el.name === name);
        }

        const globalList = generateGlobalList(state.carState);

        if (globalList[0]) {
            return globalList;
        } else {
            dispatch(getRandomModelThunk());
        }
        return globalList;
    },
);

export function generateGlobalList(state: TcarState) {
    const japanList = Object.values(state.japan);
    const koreaList = Object.values(state.korea);

    const newJapanList = japanList.reduce((acc, el) => {
        el.forEach(item => acc.push(item));
        return acc;
    }, []);
    const newKoreaList = koreaList.reduce((acc, el) => {
        el.forEach(item => acc.push(item));
        return acc;
    }, []);

    const globalList: Car[] = [...newJapanList, ...newKoreaList].sort((a: Car, b: Car) =>
        a.mileage > b.mileage ? 1 : -1,
    );
    return globalList;
}
