import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            fontSize: '0.9em',
            background:
                'radial-gradient(25% 25% at 50% top, rgba(196,39,251,0.5970763305322129) 10%, rgba(196,39,251,0) 100%)',
        }),
        Title: styled.div({
            marginBottom: 10,
        }),
        Text: styled.div(() => ({
            lineHeight: '1.25em',
            overflow: 'hidden',
            height: '3.75em',
            position: 'relative',
            paddingTop: 20,
            transform: 'translate(0,-20px)',
            transition: '0.3s',
            '&.open': {
                paddingTop: 0,
                height: 'auto',
                transform: 'translate(0, -0px)',
            },
        })),
        OpenFullText: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            width: '6em',
            position: 'absolute',
            textAlign: 'end',
            bottom: 0,
            right: 0,

            background: 'linear-gradient(90deg, rgba(28,27,51,0) 0%, rgba(28,27,51,1) 43%);',
            color: theme?.textColor,
            transition: '0.3s',
            ':hover': {
                color: theme?.textColorGray,
            },
        })),
        size,
    };
};
