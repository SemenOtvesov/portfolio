import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            padding: '50px 0',
            position: 'relative',
        }),
        Bacground: styled.div({
            backgroundColor: `rgb(75, 75, 75, 0.3);`,
            position: 'absolute',
            height: '100%',
            width: '200%',
            left: '-50%',
            top: 0,
        }),
        List: styled.div({}),
        size,
    };
};
