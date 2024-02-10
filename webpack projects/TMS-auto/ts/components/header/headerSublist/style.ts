import useWindowSizeCheck, { TwindowSize } from 'ts/hooks/useWindowSizeCheck';
import { CSSProperties } from 'react';
import styled from '@emotion/styled';
import posAbs from '@ts/style/allStyled/posAbs';
import { $background } from '@ts/style/allStyled/colors';
import { motion, Variants } from 'framer-motion';

const ContainerVariants: Variants = {
    initial: {
        y: 10,
    },
    animate: {
        y: 0,
    },
};

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled(motion.div)(ContainerParams(size)),
        ContainerVariants,
        size,
    };
};
function ContainerParams(size: TwindowSize): any {
    let allStyle: CSSProperties = {
        ...posAbs,
        height: 'fit-content',
        backgroundColor: $background,
        top: '101%',

        display: 'flex',
        justifyContent: 'space-between',
        padding: '26px 10vw',
    };
    if (size.isTab) {
        allStyle = { ...allStyle, padding: '26px 15px' };
    }
    if (size.isMobile) {
        allStyle = {
            ...allStyle,
            padding: '26px 15px',
            flexDirection: 'column',
            gap: '30px',
            height: 'calc(100vh - 100%)',
        };
    }
    return allStyle;
}
