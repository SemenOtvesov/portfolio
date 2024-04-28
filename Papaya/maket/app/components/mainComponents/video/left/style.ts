import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            flex: '0 0 80%',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
        }),
        size,
    };
};
