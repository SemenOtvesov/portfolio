import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';
import posAbs from '@app/helpers/style';
import { TglobalTheme } from '@app/hooks/useTheme';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            ...posAbs,
            width: '87.7vw',
            left: '12.3vw',
            height: 'fit-content',
            backgroundColor: theme?.bgColorNav,
        })),
        size,
    };
};
