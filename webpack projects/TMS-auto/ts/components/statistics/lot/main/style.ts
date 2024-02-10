import { $borders, $hoverWhite } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            display: 'flex',
            justifyContent: 'space-between',
            height: 'fit-content',
            flexDirection: size.isMobile || size.isTab ? 'column' : 'row',
            gap: size.isMobile || size.isTab ? 30 : 0,
        }),
        RightItemMiddleItem: styled.span({ display: 'block' }),
        RightItemMiddleItemMain: styled.figure({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
        }),
        RightItemMiddleItemTitle: styled.div({ color: $hoverWhite }),
        RightItemMiddleItemText: styled.div({ fontWeight: 700, width: 'fit-content' }),
        size,
    };
};
