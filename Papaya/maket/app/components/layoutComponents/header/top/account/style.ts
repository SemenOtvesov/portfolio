import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import useWindowSizeCheck from '@hooks/useWindowSizeCheck';
import posAbs from '@helpers/style';
import { motion } from 'framer-motion';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            position: 'relative',
        }),
        LogoImg: styled.img({
            ':before': {
                content: "'A'",
                display: 'block',
            },
            ...posAbs,
        }),
        Account: styled.div({
            width: '2em',
            aspectRatio: '1/1',
            backgroundColor: '#22D7FF',
            borderRadius: '50%',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            div: { fontSize: '1em', width: '1em', height: '1em', color: '#fff' },
            overflow: 'hidden',
            position: 'relative',
        }),
        Popap: styled(motion.div)(({ theme }: { theme?: TglobalTheme }) => ({
            position: 'absolute',
            color: theme?.textColor,
            right: 'calc(100% + 10px)',
            top: 10,
            width: 'calc(11em + 30px)',
            backgroundColor: theme?.bgPopap,
            borderRadius: 10,
            border: `1px solid ${theme?.textColorGray}`,
            zIndex: 10,
            div: { padding: '10px 15px' },
        })),
        Title: styled.div(({ theme }: { theme?: TglobalTheme }) => ({
            borderBottom: `1px solid ${theme?.textColorGray}`,
            paddingBottom: 5,
        })),
        Button: styled.div(({ auth }: { auth: boolean }) => ({
            display: 'flex',
            gap: 10,
            alignItems: 'center',
            div: { padding: 0, transform: auth ? 'rotate(180deg)' : 'rotate(0)' },
        })),
        size,
    };
};
