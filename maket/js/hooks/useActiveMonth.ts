import { useEffect } from 'react';
import useAppSelector from './useAppSelector';
import useAppDispatch from './useAppDispatch';
import monthAddRequest from '@js/state/user/asyncThunk/monthAddRequest';
import monthListNames from '@constants/monthList';

export default () => {
    const dispatch = useAppDispatch();
    const activeMonth = useAppSelector(state => state.userState.activeMonth);
    useEffect(() => {
        if (activeMonth === false) {
            dispatch(
                monthAddRequest({
                    title: monthListNames[new Date().getMonth()],
                    year: new Date().getFullYear(),
                }),
            );
        }
    }, [activeMonth]);
    return activeMonth;
};
