'use client';
import React, { useState } from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import style from './style';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';
import Burger from '@ts/components/helpers/burger/burger';
import useAppDispatch from 'ts/hooks/useAppDispatch';
import { setState } from '@store/headerState';
import useAppSelector from 'ts/hooks/useAppSelector';

type Tprops = {
    type: 'office' | 'message' | 'calc' | 'close';
};

export default ({ type }: Tprops) => {
    const [openOffice, setOpenOffice] = useState(true);
    const size = useWindowSizeCheck();
    const dispatch = useAppDispatch();
    const state = useAppSelector(state => state.headerState.state);

    const {
        CalcContainer,
        CheckBox,
        CheckBoxContainter,
        ItemText,
        ItemTitle,
        MainItem,
        BigTitleText,
    } = style();

    if (type !== 'close') {
        let ItemTop = (
            <ItemTitle style={BigTitleText}>
                {!size.isMobile ? 'РАССЧИТАТЬ' : 'РАССЧИТАТЬ СТОИМОСТЬ'}
            </ItemTitle>
        );
        let ItemBottom = (
            <ItemText style={BigTitleText}>{!size.isMobile ? 'СТОИМОСТЬ' : ''}</ItemText>
        );

        if (type === 'office') {
            ItemTop = (
                <ItemTitle>
                    Офис в г. Владивосток
                    <CheckBoxContainter>
                        <CheckBox style={{ backgroundColor: openOffice ? '#22C55E' : '#ED2224' }} />{' '}
                        открыт
                    </CheckBoxContainter>
                </ItemTitle>
            );
            ItemBottom = (
                <ItemText>
                    8 (800) 500-42-72 <ArrowOutwardIcon style={{ fontSize: '1.25em' }} />
                </ItemText>
            );
        }

        if (type === 'message') {
            ItemTop = (
                <ItemTitle>
                    {!size.isMobile ? 'Напишите нам на WhatsApp' : 'Напишите в WhatsApp'}
                </ItemTitle>
            );
            ItemBottom = (
                <ItemText>
                    +7 999 888-77-66 <ArrowOutwardIcon style={{ fontSize: '1.25em' }} />
                </ItemText>
            );
        }

        const mainItem = (
            <MainItem
                style={
                    type == 'calc' && !size.isMobile
                        ? { border: 'none', padding: '0 0 0 20px' }
                        : {}
                }
            >
                {ItemTop}
                {!size.isMobile ? ItemBottom : type === 'calc' ? <></> : ItemBottom}
            </MainItem>
        );
        if (type === 'calc') {
            return (
                <CalcContainer>
                    {mainItem}
                    {!size.isMobile ? <ArrowOutwardIcon style={{ fontSize: '1.25em' }} /> : <></>}
                </CalcContainer>
            );
        } else {
            return mainItem;
        }
    }
    return (
        <ItemTitle
            style={!size.isMobile ? { marginLeft: '20px' } : {}}
            onClick={() => dispatch(setState())}
        >
            <Burger state={!state} />
        </ItemTitle>
    );
};
