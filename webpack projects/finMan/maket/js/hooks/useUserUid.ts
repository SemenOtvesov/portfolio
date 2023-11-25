import { TregState } from '@js/types/forms/login';
import useAppSelector from './useAppSelector';
import { useEffect } from 'react';

export default (setRegState: React.Dispatch<React.SetStateAction<TregState>>) => {
    const userUid = useAppSelector(state => state.userState.userUid);
    useEffect(() => setRegState(undefined), [userUid]);
    return userUid;
};
