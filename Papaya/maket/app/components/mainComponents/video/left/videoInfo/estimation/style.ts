import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            display: 'flex',
            gap: 20,
            background:
                'linear-gradient(180deg, rgba(196,39,251,0) 0%, rgba(196,39,251,0.4) 100%);',
            padding: '10px',
            borderRadius: 30,
        }),
        Item: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            display: 'flex',
            gap: 20,
            height: 'calc(1em + 10px)',
            borderRadius: '20px',
            transition: '0.3s',
            ':nth-child(1)': { padding: '5px 10px' },
            ':nth-child(2)': { padding: '5px 10px' },
            ':hover': { backgroundColor: theme?.textColorGray },
        })),
        Icon: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            width: '1em',
            height: '1em',
            color: theme?.textColorGray,
        })),
        size,
    };
};
