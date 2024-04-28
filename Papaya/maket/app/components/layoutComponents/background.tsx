import { TglobalTheme } from '@app/hooks/useTheme';
import styled from '@emotion/styled';
import React from 'react';
import posAbs from '@app/helpers/style';

export default () => {
    const Background = styled.div(({ theme }: { theme?: TglobalTheme }) => ({
        ...posAbs,
        backgroundColor: theme?.bgColor,
        zIndex: -1,
    }));
    return <Background></Background>;
};
