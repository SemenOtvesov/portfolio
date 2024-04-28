import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Video: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            marginBottom: '2.5em',
            flex: '0 0 32%',
            borderRadius: '1em',
            overflow: 'hidden',
            ':hover': {
                boxShadow: `0 0 30px rgba(72,49,157,1)`,
            },
        })),
        Preview: styled.div({
            width: '100%',
            aspectRatio: '1/0.55',
            position: 'relative',
        }),
        PreviewContent: styled.picture({
            display: 'block',
            width: '100%',
            height: '100%',
        }),
        PreviewTime: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            position: 'absolute',
            fontSize: '0.81em',
            color: theme?.textColor,
            padding: 4,
            borderRadius: 4,
            bottom: 10,
            right: 12,
            backgroundColor: '#000',
        })),
        Main: styled.div({
            display: 'flex',
            gap: '1em',
            padding: '1.5em 1em',
            background: 'linear-gradient(180deg, rgba(72,49,157,0.5) 0%, rgba(72,49,157,0) 100%)',
        }),
        Info: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            color: theme?.textColorGray,
            fontSize: '0.81em',
            fontWeight: 500,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
        })),
        Title: styled.div({
            color: '#fff',
            fontSize: '1.31em',
            fontWeight: 700,
        }),
        ChanelName: styled.div({}),
        SubInfo: styled.div({}),
        size,
    };
};
