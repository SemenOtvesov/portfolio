import styled from '@emotion/styled';
import { Variants, motion } from 'framer-motion';
import { CSSProperties } from 'react';

export const variantsBurger: Variants = {
    initial: {
        transform: 'rotate(-359deg)',
    },
    animate: {
        transform: 'rotate(0deg)',
    },
};

const spanAfterBeforeSx: CSSProperties = {
    left: 0,
    position: 'absolute',
    height: '2px',
    width: '100%',
    transition: '0.3s ease',
    backgroundColor: '#fff',
    content: "''",
};

export const burgerStyled = (state: boolean | undefined) =>
    styled(motion.div)({
        zIndex: 5,
        display: 'block',
        position: 'relative',
        width: '20px',
        height: '20px',
        transition: '0.3s',
        cursor: 'pointer',
        ':after, :before': { ...spanAfterBeforeSx },

        span: {
            ...spanAfterBeforeSx,
            top: '50%',
            transform: state ? 'scale(1) translate(0, -25%)' : 'scale(0) translate(0, -50%)',
        },
        ':after': state
            ? { bottom: 0 }
            : {
                  bottom: '50%',
                  transform: 'rotate(45deg) translate(2%, 50%)',
              },
        ':before': state
            ? { top: 0 }
            : { top: '50%', transform: 'rotate(-45deg) translate(0, -50%)' },
    });
