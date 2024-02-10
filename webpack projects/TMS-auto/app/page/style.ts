'use client';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';

import useWindowSizeCheck, { TwindowSize } from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div(ContainerParams(size)),
    };
};
export const itemContainer = () => {
    const size = useWindowSizeCheck();

    return styled.div(ItemContainerParams(size));
};
function ContainerParams(size: TwindowSize): any {
    let allStyle: SxProps = { marginTop: '108px', fontSize: '16px' };
    if (size.isLaptop || size.isTab || size.isMobile) {
        allStyle = { ...allStyle, fontSize: '14px' };
    }
    return allStyle;
}
function ItemContainerParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        maxWidth: '80vw',
        margin: '0 auto',
        position: 'relative',
        padding: '34px 0',
        color: '#fff',

        display: 'flex',
        flexDirection: 'column',
        gap: 30,
    };
    if (size.isLaptop) {
        allStyle = { ...allStyle, padding: '20px 0' };
    }
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle, padding: '30px 15px', maxWidth: '100vw' };
    }
    return allStyle;
}
export const ItemContainerTitle = styled.div({
    fontSize: '2em',
    fontWeight: 700,
});
