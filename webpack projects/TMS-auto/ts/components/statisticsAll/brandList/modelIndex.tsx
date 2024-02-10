'use client';
import useAppSelector from 'ts/hooks/useAppSelector';
import useAppDispatch from 'ts/hooks/useAppDispatch';
import { useEffect } from 'react';
import setActiveBrandThunk from '@store/carState/asyncThunk/setActiveBrandThunk';
import { createItem } from './createItem';
import Item from './item';

type Tprops = { type: 'japan' | 'korea'; brand: string };

export default ({ type, brand }: Tprops) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setActiveBrandThunk(brand));
    }, []);
    const list = useAppSelector(state => state.carState[type][brand]) || [];

    const filterListNames = [...new Set(list.map(el => el.name.split(brand + ' ')[1]))];
    return createItem(filterListNames).map((el, i) => <Item key={el.title + i} item={el} />);
};
