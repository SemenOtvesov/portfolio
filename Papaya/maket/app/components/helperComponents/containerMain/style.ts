import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            position: 'absolute',
            top: 'calc(7em)',
            left: '12.3vw',
            width: '87.7vw',
            height: 'calc(100vh - 7em)',
            display: 'flex',
            flexWrap: 'wrap',
            padding: '2em 3em',
            gap: '1em',
        }),
        size,
    };
};
