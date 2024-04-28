import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        SearchBox: styled.div({
            flex: '1 1',
            display: 'flex',
            justifyContent: 'center',
        }),
        Search: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            background:
                'linear-gradient(144deg, rgba(15,85,232,0.3) 0%, rgba(157,223,243,0.3) 100%);',
            border: '1px solid rgba(255, 255, 255, 0.5)',
            width: '29vw',
            borderRadius: 40,
            padding: '0.5em',
            fontSize: 13,

            display: 'flex',
            alignItems: 'center',
            gap: 10,

            div: {
                color: 'rgba(255, 255, 255, 0.6)',
                width: 24,
                aspectRatio: '1/1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
        })),
        SearchIcon: styled.div({}),
        SearchInput: styled.input({
            backgroundColor: '#00000000',
            flex: '1 1',
            color: '#fff',
            '::placeholder': { color: '#fff' },
        }),
        SearchButton: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            fontSize: 13,
            background: 'linear-gradient(90deg, rgba(167,62,231,1) 0%, rgba(0,235,255,1) 100%)',
            borderRadius: '50%',
            padding: 2,
            boxSizing: 'content-box',
            position: 'relative',
            ':after': {
                content: "''",
                position: 'absolute',
                width: '90%',
                aspectRatio: '1/1',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                opacity: 0.7,
                backgroundColor: theme?.bgColorNav,
                borderRadius: '50%',
                zIndex: 0,
            },
            div: { zIndex: 1 },
        })),
        size,
    };
};
