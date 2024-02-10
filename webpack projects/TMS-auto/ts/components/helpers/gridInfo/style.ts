import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            display: size.isMobile || size.isTab ? 'flex' : 'grid',
            flexDirection: 'column',
            width: '100%',
            height: 'fit-content',
            gap: size.isMobile || size.isTab ? 10 : 15,
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
        }),
        size,
    };
};
