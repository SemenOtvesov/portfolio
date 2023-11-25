import { TappDispatch } from '@js/state/store';
import userInfoCommonListItemAddRequest from '@js/state/user/asyncThunk/commonItem/commonItemAddRequest';
import {
    TuserInfoCommonListItem,
    TuserInfoCommonListItemNames,
} from '@js/types/state/user/userState';

type Tprops = {
    title: string;
    prise: number;
    id: number;
    type: TuserInfoCommonListItemNames;
    dispatch: TappDispatch;
};
const addButtonClick = ({ title, prise, id, type, dispatch }: Tprops) => {
    let body: TuserInfoCommonListItem = { title, prise, id, completed: undefined };
    if (type === 'purpose') {
        body = { title, prise, id, completed: false };
    }
    dispatch(userInfoCommonListItemAddRequest({ body, type }));
};
export default addButtonClick;
