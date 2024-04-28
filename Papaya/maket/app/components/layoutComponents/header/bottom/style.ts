import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';
import { Button } from '@mui/material';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            display: 'flex',
            justifyContent: 'space-between',
            background:
                'linear-gradient(180deg, rgba(196,39,251,0) 0%, rgba(196,39,251,0.2) 100%);',
        }),
        Item: styled(Button)(({ theme }: { theme?: TglobalTheme }) => ({
            color: theme?.textColorGray,
            fontWeight: 400,
            textTransform: 'none',
            padding: '1em 1.5em',
        })),
        size,
    };
};
