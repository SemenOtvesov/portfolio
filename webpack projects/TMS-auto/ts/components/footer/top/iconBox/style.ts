import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        IconBox: styled.div({
            display: 'flex',
            justifyContent: size.isMobile ? 'start' : 'space-between',
            gap: 10,
        }),
        Icon: styled.div({
            transition: '0.3s',
            width: 36,
            height: 36,
            ':hover': { opacity: 0.8 },
            img: {
                width: '100%',
                height: '100%',
            },
        }),
        size,
    };
};
