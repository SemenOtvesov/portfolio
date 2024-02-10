import { $background } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            display: 'flex',
            position: 'relative',
            alignItems: size.isMobile ? 'start' : 'center',
            justifyContent: 'space-between',
            flexDirection: size.isMobile ? 'column' : 'row',
            gap: size.isMobile ? 20 : 0,
        }),
        ImageBox: styled.div({
            height: 'auto',
            width: '100%',
            aspectRatio: '2.42 / 1',
            picture: {
                width: '100%',
                height: '100%',
            },
        }),
        TopItem: styled.div({
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 13,
        }),
        TopItemText: styled.div({
            height: size.isDesktop ? '3em' : size.isMobile ? '1em' : '2em',
            display: 'flex',
            alignItems: 'center',
            fontSize: size.isDesktop ? '1.2em' : '1em',
        }),
        ItemWrapper: styled.div({
            padding: size.isDesktop ? '17px 20px' : '7px 10px',
            width: size.isMobile ? '100%' : 'fit-content',
            ':nth-child(1)': { flex: '0 0 13%' },
            ':nth-child(3)': { flex: '0 0 25%' },
            ':nth-child(4)': { flex: '0 0 25%' },
            ':nth-child(6)': { flex: '0 0 25%' },
        }),
        Plug: styled.div({
            width: 1,
            height: 1,
            span: {
                position: 'absolute',
                width: 1,
                height: '100%',
                transform: 'translate(0,-50%)',
                backgroundColor: $background,
            },
        }),
        size,
    };
};
