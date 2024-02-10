import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: size.isMobile ? 'column' : 'row',
            gap: size.isMobile ? 10 : 0,
            marginTop: size.isMobile ? 'calc(20px + 22em)' : 20,
            zIndex: 10,
        }),
        size,
    };
};
