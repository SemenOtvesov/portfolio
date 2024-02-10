import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';
import posAbs from '@ts/style/allStyled/posAbs';
import { $liteBackground } from '@ts/style/allStyled/colors';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: size.isMobile || size.isTab ? 'column' : 'row',
            gap: 30,
        }),
        Item: styled.div({
            flex: '0 0 50%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: 30,
            minHeight: size.isMobile ? '8em' : '20em',
        }),
        ImageWrapper: styled.div({
            ...posAbs,
            picture: {
                width: '100%',
                height: '100%',
                img: {
                    width: size.isMobile || size.isTab ? '70%' : '100%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    height: 'auto',
                    maxHeight: '100%',
                },
            },
        }),
        size,
    };
};
