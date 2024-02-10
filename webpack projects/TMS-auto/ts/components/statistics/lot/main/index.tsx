'use client';
import { TurlParams } from '@locTypes/urlPath';
import style from './style';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import useAppDispatch from 'ts/hooks/useAppDispatch';
import setActiveLotThunk from '@store/carState/asyncThunk/setActiveLotThunk';
import useAppSelector from 'ts/hooks/useAppSelector';
import { Car } from '@locTypes/state/carState';
import getBrandListThunk from '@store/carState/asyncThunk/getBrandListThunk';
import Left from './components/left/left';
import Right from './components/right/right';

export default () => {
    const { Container } = style();

    const params: TurlParams = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setActiveLotThunk(params));
        dispatch(getBrandListThunk());
    }, []);
    const lot = useAppSelector(state => state.carState.activeLot) as Car;
    if (!lot.body) return <></>;

    return (
        <Container>
            <Left lot={lot} />
            <Right lot={lot} />
        </Container>
    );
};
