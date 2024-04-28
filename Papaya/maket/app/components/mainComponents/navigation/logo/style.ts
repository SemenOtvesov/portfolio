import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';
import posAbs from '@app/helpers/style';
import { UnderLineParams } from '../style';

export default () => {
    const size = useWindowSizeCheck();
    return {
        LogoBox: styled.div({
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            padding: '16px 24px',
            position: 'relative',
            zIndex: 1,
            ':after': {
                zIndex: 0,
                content: "''",
                display: 'block',
                ...posAbs,
                top: '100%',
                height: '50%',
                background:
                    'linear-gradient(180deg, rgba(128,21,167,0.46262254901960786) 0%, rgba(97,54,144,0) 100%)',
            },
        }),
        Logo: styled.div({
            fontSize: '1.68em',
            transform: 'translate(0, 10%)',
        }),
        Burger: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            'span, ::before, ::after': {
                backgroundColor: theme?.textColorGray,
            },
        })),
        Blur: styled.div({
            ...UnderLineParams(size),
            backgroundColor: '#8015A7',
            background:
                'linear-gradient(9deg, rgba(255,255,255,0) 0%, rgba(128,21,167,1) 50%, rgba(255,255,255,0) 100%);',
        }),
        size,
    };
};
