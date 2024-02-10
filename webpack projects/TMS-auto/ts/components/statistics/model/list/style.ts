import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }),
        Main: styled.div({
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            width: '100%',
        }),
        size,
    };
};
