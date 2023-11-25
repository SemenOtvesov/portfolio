import { TrootState } from '@js/state/store';
import {
    TuserInfoCommonListItem,
    TuserInfoCommonListItemNames,
} from '@js/types/state/user/userState';
import { createAsyncThunk } from '@reduxjs/toolkit';
import postNewCommonItem from '../../requests/commonItem/postNewCommonItem';
import getMonthKey from '@js/helpers/month/getMonthKey';

type outType = {
    data: TuserInfoCommonListItem | undefined;
    type: TuserInfoCommonListItemNames;
    key: string;
};

type entType = {
    body: TuserInfoCommonListItem;
    type: TuserInfoCommonListItemNames;
};

export default createAsyncThunk<outType, entType, { state: TrootState }>(
    'userState/commonItemAddRequest',
    async ({ body, type }, { getState }) => {
        const userState = getState().userState;
        const userUid = userState.userUid;
        let data: TuserInfoCommonListItem | undefined;
        let key = '';

        const monthKey = getMonthKey({
            activeMonth: userState.activeMonth,
            monthList: userState.user?.monthList,
            monthListKey: userState.user?.monthListKey,
        });
        if (monthKey) {
            await postNewCommonItem({ userUid, monthKey, body, type }).then(rez => {
                if (!rez) {
                    return;
                }
                data = rez.body;
                key = rez.key;
            });
        }
        return { data, type, key };
    },
);
