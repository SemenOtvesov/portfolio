import { TregState } from '@js/types/forms/login';
import React, { useEffect, useState } from 'react';
import useAppSelector from './useAppSelector';

type Treturn = [TregState, React.Dispatch<React.SetStateAction<TregState>>];

export default (setWindowBlur: React.Dispatch<React.SetStateAction<boolean>>): Treturn => {
    const [regState, setRegState] = useState<TregState>();
    const user = useAppSelector(state => state.userState.user);

    useEffect(() => {
        setWindowBlur(!!regState);
    }, [regState]);

    useEffect(() => {
        user && setRegState && setRegState(undefined);
    }, [user]);

    return [regState, setRegState];
};
