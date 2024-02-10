import { $gray } from '@ts/style/allStyled/colors';
import styled from '@emotion/styled';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Card: styled.div({
            flex: size.isMobile
                ? '100%'
                : size.isTab
                  ? '0 0 calc(50% - 1em)'
                  : '0 0 calc(33.33% - 0.67em)',

            aspectRatio: '1/1.26',
            border: `1px solid rgba(120, 120, 120, 0.5);`,
            position: 'relative',

            display: 'flex',
            flexDirection: 'column-reverse',

            button: {
                border: '1px solid #fff',
            },
            picture: {
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translate(-50%)',
                width: '67%',
                height: '82%',
            },
            '.loading-img.loading-img': {
                position: 'absolute',
                width: '20%',
                height: '20%',
                backgroundColor: '#00000000',
            },
        }),
        CardBottom: styled.div({
            zIndex: 1,
            padding: 19,
            display: 'flex',
            flexDirection: 'column',
            gap: 11,
            backgroundColor: 'rgba(75,75,75, 0.5)',
            backdropFilter: 'blur(5px)',
        }),
        CardTitle: styled.div({
            fontSize: '1.25em',
            fontWeight: 700,
        }),
        CardText: styled.div({
            color: $gray,
        }),
        size,
    };
};
