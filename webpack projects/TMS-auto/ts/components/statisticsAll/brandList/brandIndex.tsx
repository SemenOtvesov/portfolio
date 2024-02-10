'use client';
import useAppSelector from 'ts/hooks/useAppSelector';
import useAppDispatch from 'ts/hooks/useAppDispatch';
import { useEffect } from 'react';
import getBrandListThunk from '@store/carState/asyncThunk/getBrandListThunk';
import Item from './item';
import { createItem } from './createItem';

export default ({ type }: { type: 'japan' | 'korea' }) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getBrandListThunk());
    }, []);
    const list = useAppSelector(state =>
        type === 'japan' ? state.carState.brandListJapan : state.carState.brandListKorea,
    );

    return createItem(list).map(el => <Item key={el.title} item={el} />);
};
