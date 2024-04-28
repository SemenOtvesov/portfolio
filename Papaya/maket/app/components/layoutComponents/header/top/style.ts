import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Top: styled.div({
            display: 'flex',
            gap: 30,
            alignItems: 'center',
            padding: '0.5em',
        }),
        Notification: styled.div({
            width: '1.5em',
            aspectRatio: '1/1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            transition: '0.3s',
            transform: 'translate(0, 5%)',

            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '1.5em',
            ':hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
        }),
        size,
    };
};
