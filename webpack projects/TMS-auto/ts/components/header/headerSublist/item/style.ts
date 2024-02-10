import useWindowSizeCheck, { TwindowSize } from 'ts/hooks/useWindowSizeCheck';
import styled from '@emotion/styled';
import { SxProps } from '@mui/material';
import { $hover } from '@ts/style/allStyled/colors';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div(ContainerParams(size)),
        Title: styled.div(TitleParams(size)),
        List: styled.div(ListParams(size)),
        SubItem: styled.div(SubItemParams(size)),
        size,
    };
};
function ContainerParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        display: 'flex',
        flexDirection: 'column',
        gap: '27px',
        fontSize: '16px',
    };
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle, fontSize: '12px', gap: '20px' };
    }
    return allStyle;
}
function TitleParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        fontSize: '1.5em',
    };
    if (size.isMobile) {
        allStyle = { ...allStyle, textAlign: 'end' };
    }
    return allStyle;
}
function ListParams(size: TwindowSize): any {
    let allStyle: SxProps = { display: 'flex', flexDirection: 'column', gap: '27px' };
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle, gap: '20px' };
    }
    if (size.isMobile) {
        allStyle = { ...allStyle, alignItems: 'end' };
    }
    return allStyle;
}
function SubItemParams(size: TwindowSize): any {
    let allStyle: SxProps = { color: '#fff', transition: '0.3s', ':hover': { color: $hover } };
    return allStyle;
}
