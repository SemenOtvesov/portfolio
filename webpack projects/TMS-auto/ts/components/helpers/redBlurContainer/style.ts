import { $borders } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';
import useWindowSizeCheck, { TwindowSize } from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return { Container: styled.div(ContainerParams(size)) };
};

export function ContainerParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        borderRadius: '3px',
        border: `1px solid ${$borders}`,
        overflow: 'hidden',
        position: 'relative',
        padding: '26px 32px',
        fontSize: '16px',

        display: 'flex',
        backgroundColor: '#7878787f',
        justifyContent: 'space-between',
        gap: '20px',
        ':after': {
            content: "''",
            width: '38%',
            height: '65%',
            bottom: '65%',
            position: 'absolute',
            backgroundColor: '#ed222549',
            borderRadius: '50%',
            filter: 'blur(50px)',
        },
    };
    if (size.isLaptop || size.isTab || size.isMobile) {
        allStyle = { ...allStyle };
    }
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle, padding: '20px 15px', fontSize: 14 };
    }
    if (size.isMobile) {
        allStyle = { ...allStyle, flexDirection: 'column' };
    }
    return allStyle;
}
