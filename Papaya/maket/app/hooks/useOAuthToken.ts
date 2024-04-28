import { useLocation } from 'react-router-dom';
import useAppDispatch from './useAppDispatch';
import { useEffect } from 'react';
import { setOAuthToken } from '@app/state/authState/asyncThunk/setOAuthTokenThunk';

export default () => {
    const dispatch = useAppDispatch();
    const location = useLocation();

    const code = location.search
        .split('&')
        .find(el => el.includes('code'))
        ?.split('code=')[1];

    useEffect(() => {
        if (!code) return;
        dispatch(setOAuthToken(code));
    }, []);
};
