import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            display: 'flex',
            gap: 13,
            flexDirection: size.isMobile ? 'row' : 'column',
            justifyContent: size.isMobile ? 'space-between' : 'start',
        }),
        Item: styled.div({
            display: 'flex',
            flexDirection: 'column',
            gap: 7,
        }),
        Title: styled.div({ display: 'flex', fontSize: '0.68em', alignItems: 'center' }),
        CheckBox: styled.div({
            width: 6,
            height: 6,
            borderRadius: 1,
            margin: '0 4px 0 10px',
            padding: 0,
        }),
        Text: styled.div({
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            fontSize: size.isDesktop ? '1.375em' : '1.1em',
            fontWeight: 700,
        }),
        size,
    };
};
