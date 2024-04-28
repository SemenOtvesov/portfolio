import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';
import posAbs from '@helpers/style';

export default () => {
    const size = useWindowSizeCheck();
    return {
        ChanelContainer: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            width: '2.5em',
            height: '2.5em',
            minWidth: '2.5em',
            minHeight: '2.5em',
            position: 'relative',
            backgroundColor: theme?.textColorGray,
            borderRadius: '50%',
            overflow: 'hidden',
        })),
        Chanel: styled.img({
            ...posAbs,
            objectFit: 'cover',
        }),
        size,
    };
};
