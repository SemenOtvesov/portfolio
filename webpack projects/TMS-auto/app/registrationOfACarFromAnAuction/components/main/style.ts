import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        List: styled.div({ display: 'flex', flexDirection: 'column', gap: 10 }),
        ListItem: styled.div({
            display: 'flex',
            gap: 10,
        }),
        size,
    };
};
