import { $background, $hover } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Container: styled.div({
            display: 'flex',
            justifyContent: 'space-between',
            position: 'relative',
            margin: size.isMobile ? '' : '13px 0 0 0',
            padding: '14px 0',
            flexDirection: size.isMobile ? 'column' : 'row',
        }),
        ItemBox: styled.div({
            flex: '0 0 60%',
            display: 'flex',
            flexDirection: size.isMobile ? 'row' : 'column',
            justifyContent: size.isMobile ? 'space-between' : 'start',
            padding: size.isMobile ? '7px 10px' : '0',
            gap: 20,
        }),
        ItemLine: styled.div({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'start',
            flexDirection: size.isMobile ? 'column' : 'row',
            gap: size.isMobile ? '15px' : 0,
        }),
        Item: styled.div({
            flex: size.isMobile ? '' : '0 0 23%',
            transition: '0.3s',

            ':hover': { color: $hover },
        }),
        InfoBox: styled.div({
            padding: size.isMobile ? '7px 10px' : '14px 23px',
            marginTop: size.isMobile ? '23px' : '',
            display: 'flex',
            flexDirection: 'column',
            gap: 15,
        }),
        Info: styled.div({ fontSize: '0.75em', color: $hover }),
        Plug: styled.div({
            width: 1,
            height: 1,
            span: {
                position: 'absolute',
                width: 1,
                height: '100%',
                top: '50%',
                transform: 'translate(0, -50%)',
                backgroundColor: $background,
            },
        }),
        size,
    };
};
