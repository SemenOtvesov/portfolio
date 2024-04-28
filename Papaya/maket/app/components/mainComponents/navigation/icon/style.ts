import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        IconGroupe: styled.div({
            padding: '1.375em',
            display: 'flex',
            gap: '0.5em',
        }),
        Icon: styled.div({
            width: '0.75em',
            borderRadius: '50%',
            aspectRatio: '1/1',
            ':nth-child(1)': { backgroundColor: '#ED695E' },
            ':nth-child(2)': { backgroundColor: '#F4BF4F' },
            ':nth-child(3)': { backgroundColor: '#61C554' },
        }),
        size,
    };
};
