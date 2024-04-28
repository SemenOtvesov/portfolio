import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            display: 'flex',
            gap: 10,
            height: '100%',
        }),
        Info: styled.div({
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-around',
        }),
        InfoItem: styled.div({
            fontSize: '0.85em',
        }),
        size,
    };
};
