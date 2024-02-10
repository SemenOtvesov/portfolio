import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        ItemContainer: styled.div({
            display: 'flex',
            gap: size.isDesktop ? '35px' : size.isLaptop ? '10px' : '15px',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexDirection: size.isMobile || size.isTab ? 'column' : 'row',
        }),
        size,
    };
};
