import { Car, TcarState } from '@locTypes/state/carState';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { TrendomModelResponse } from '../requests/getRandomModelRequest';
import { generateGlobalList } from '../asyncThunk/setActiveModelThunk';

type TnewStateObj = {
    japan: { [key: string]: Array<Car> };
    korea: { [key: string]: Array<Car> };
};

const reduser: CaseReducer<TcarState, PayloadAction<TrendomModelResponse | undefined>> = (
    state,
    action,
) => {
    const newStateObj: TnewStateObj = { japan: {}, korea: {} };
    action.payload?.japan.forEach(el => {
        genCountryObj('japan', newStateObj, el);
    });
    action.payload?.korea.forEach(el => {
        genCountryObj('korea', newStateObj, el);
    });

    state.japan = { ...state.japan, ...newStateObj.japan };
    state.korea = { ...state.korea, ...newStateObj.korea };

    let globalList = generateGlobalList(state);
    if (state.activeModel) {
        globalList = globalList.filter(
            el => el.name === `${state.activeBrandName} ${state.activeModel}`,
        );
    }
    state.activeModelList = globalList;
};
export default reduser;

function genCountryObj(country: 'japan' | 'korea', newStateObj: TnewStateObj, el: Car) {
    if (newStateObj[country]) {
        if (newStateObj[country][el.brand]) {
            newStateObj[country][el.brand] = [...newStateObj[country][el.brand], el];
        } else {
            newStateObj[country][el.brand] = [el];
        }
    } else {
        newStateObj[country][el.brand] = [el];
    }
}
