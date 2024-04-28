'use client';
import { MenuItem, Select } from '@mui/material';
import style from './style';
import React, { useEffect, useState } from 'react';
import useAppSelector from '@app/hooks/useAppSelector';

const selectList = ['Все', 'Никакие', 'Отменить подписку', 'Вы не подписаны'];

export default () => {
    const { SelectSx, ItemSx } = style();
    const video = useAppSelector(state => state.activeVideoState.video);
    const [value, setValue] = useState<string>('');
    useEffect(() => {
        if (video?.userRaiting && video.userRaiting != 'none') {
        } else {
            setValue('Вы не подписаны');
        }
    }, [video]);
    return (
        <Select sx={SelectSx} value={value}>
            {selectList.map(el => (
                <MenuItem key={el} sx={ItemSx} value={el} onClick={() => setValue(el)}>
                    {el}
                </MenuItem>
            ))}
        </Select>
    );
};
