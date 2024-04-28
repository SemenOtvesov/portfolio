import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({}),
        Main: styled.div({
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            padding: 10,
            borderRadius: 5,
        }),
        Title: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            color: theme?.textColor,
            fontSize: '1.4em',
        })),
        MiddleLine: styled.div({
            display: 'flex',
            justifyContent: 'space-between',
            height: 'calc(1em + 30px)',
            maxHeight: 'calc(1em + 30px)',
        }),
        MiddleLineItem: styled.div({
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            flex: '0 0 45%',
        }),
        size,
    };
};
