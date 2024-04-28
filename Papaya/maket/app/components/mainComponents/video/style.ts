import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            display: 'flex',
            gap: 20,
            width: '100%',
            color: theme.textColorGray,
        })),
        size,
    };
};
