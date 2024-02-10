import { $liteBackground } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';
import posAbs from '@ts/style/allStyled/posAbs';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Info: styled.div({
            backgroundColor: $liteBackground,
        }),
        InfoContainer: styled.div({
            display: 'flex',
            gap: 10,
            alignItems: 'center',
            lineHeight: '1.5em',
            flexDirection: size.isMobile ? 'column' : 'row',
            padding: size.isMobile ? '15px 15px 30px' : 0,
        }),
        Icon: styled.div({
            width: size.isMobile ? '5em' : '8.75em',
            height: size.isMobile ? '5em' : '8.75em',
            minWidth: size.isMobile ? '5em' : '8.75em',
            minHeight: size.isMobile ? '5em' : '8.75em',
            position: 'relative',
            img: {
                ...posAbs,
            },
        }),
        IconBox: styled.div({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            span: { fontSize: '1.5em', fontWeight: 700 },
            transform: size.isMobile ? '' : 'translate(0, -25px)',
        }),
        size,
    };
};
