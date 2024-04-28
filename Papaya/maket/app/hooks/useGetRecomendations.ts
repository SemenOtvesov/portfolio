import getRecomendationVideoThunk from '@app/state/recomendationVideoState/asyncThunk/getRecomendationVideoThunk';
import { useEffect } from 'react';
import useAppDispatch from './useAppDispatch';
import useAppSelector from './useAppSelector';

export default () => {
    const dispatch = useAppDispatch();
    const { name } = useAppSelector(state => state.authState);
    useEffect(() => {
        dispatch(getRecomendationVideoThunk(name));
    }, [name]);
};
