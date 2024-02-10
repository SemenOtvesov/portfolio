import { $red } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        ContainerMain: styled.div({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: size.isMobile ? 10 : 20,
            height: '40vh',
            fontSize: size.isMobile ? 12 : 16,
            textAlign: 'center',
        }),
        Title: styled.div({
            fontSize: '2.5em',
            fontWeight: 800,
        }),
        MiddleText: styled.div({ fontSize: '2em', fontWeight: 800 }),
        Text: styled.div({ fontSize: '1.25em', marginBottom: size.isMobile ? 0 : 15 }),
        Button: styled.button({
            padding: size.isMobile ? 10 : 18,
            backgroundColor: $red,
            borderRadius: 5,
            fontWeight: 700,
            color: '#fff',
        }),
        size,
    };
};
