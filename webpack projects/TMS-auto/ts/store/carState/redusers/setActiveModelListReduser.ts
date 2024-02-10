import { TsettingsForm } from '@locTypes/forms/settingsForm';
import { Car, TcarState } from '@locTypes/state/carState';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { generateGlobalList } from '../asyncThunk/setActiveModelThunk';

const setErrRequestReduser: CaseReducer<TcarState, PayloadAction<TsettingsForm>> = (
    state,
    action,
) => {
    const globalList = generateGlobalList(state);
    const sortList = sortFn(globalList, action.payload);

    state.activeModelList = sortList;
};
export default setErrRequestReduser;

function sortFn(list: Car[], settings: TsettingsForm) {
    const {
        brand,
        model,
        body,
        yearOfProductionStart,
        yearOfProductionEnd,
        priseStart,
        priseEnd,
        mileageStart,
        mileageEnd,
        engineCapacityStart,
        engineCapacityEnd,
        evaluation,
    } = settings;
    const retList: Car[] = [];

    list.forEach(el => {
        if (el.brand !== brand && brand !== 'Все') return;
        if (el.name !== model && model !== 'Все') return;
        if (el.body !== body && (body as string) !== 'Все') return;
        if (el.evaluation !== +evaluation && evaluation !== 'Все') return;

        if (el.year < yearOfProductionStart) return;
        if (el.year > yearOfProductionEnd) return;

        if (el.price < priseStart) return;
        if (el.price > priseEnd) return;

        if (el.mileage < mileageStart) return;
        if (el.mileage > mileageEnd) return;

        if (el.engine / 1000 < engineCapacityStart) return;
        if (el.engine / 1000 > engineCapacityEnd) return;

        retList.push(el);
    });

    return retList;
}
