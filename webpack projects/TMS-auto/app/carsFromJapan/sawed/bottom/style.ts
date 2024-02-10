import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';
import { $liteBackground } from '@ts/style/allStyled/colors';

export default () => {
    const size = useWindowSizeCheck();
    return {
        ExampleBox: styled.div({
            display: 'flex',
            flexDirection: size.isMobile ? 'column' : 'row',
            gap: 17,
        }),
        Example: styled.div({
            flex: '1 1',
            height: '20em',
            padding: size.isMobile ? '15px' : '20px 60px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 30,
            backgroundColor: $liteBackground,
            borderRadius: 10,
        }),
        ExampleText: styled.div({
            fontSize: size.isMobile ? '1em' : '1.25em',
            fontWeight: 700,
        }),
        ImageBox: styled.div({
            flex: size.isMobile ? '' : '1 1',
            width: '100%',
            height: size.isMobile ? '7em' : 'auto',
            picture: {
                width: '100%',
                height: '100%',
                img: {
                    height: size.isMobile ? '100%' : 'auto',
                    width: size.isMobile ? 'auto' : '100%',
                    left: '50%',
                    transform: 'translate(-50%)',
                },
            },
        }),
        size,
    };
};
