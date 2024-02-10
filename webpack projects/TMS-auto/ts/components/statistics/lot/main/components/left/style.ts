import styled from '@emotion/styled';
import useWindowSizeCheck, { TwindowSize } from 'ts/hooks/useWindowSizeCheck';
import posAbs from '@ts/style/allStyled/posAbs';
import { SxProps } from '@mui/material';
import { $borders, $gray } from '@ts/style/allStyled/colors';

export default () => {
    const size = useWindowSizeCheck();
    return {
        Left: styled.div(LeftParams(size)),
        Swiper: styled.div({
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
        }),
        Wrapper: styled.div(WrapperParams(size)),
        Slide: styled.div({
            position: 'relative',
            flex: '0 0 100%',
            borderRadius: 5,
            overflow: 'hidden',
            picture: {
                ...posAbs,
            },
        }),
        LeftArrow: styled.div({ ...ArrowParams(size) }),
        RightArrow: styled.div({
            ...ArrowParams(size),
            left: 'auto',
            right: 7,
            transform: 'rotate(180deg) translate(0, 50%)',
        }),
        Pagination: styled.div(PaginationParams(size)),
        PaginationSlide: styled.div(PaginationSlideParams(size)),
        size,
    };
};
function ArrowParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        fontSize: '12px',
        position: 'absolute',
        top: size.isLaptop ? '27.5%' : '35%',
        transform: 'translate(0,-50%)',
        left: 7,
        padding: '1.33em',
        backgroundColor: $borders,
        border: `1px solid ${$gray}`,
        borderRadius: 3,
        svg: { fontSize: '1em' },
        transition: '0.3s',
        zIndex: 10,
        ':hover': { backgroundColor: $gray },
    };
    return allStyle;
}
function LeftParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        flex: '0 0 40%',
        aspectRatio: '1/0.8',
    };
    if (size.isLaptop || size.isTab || size.isMobile) {
        allStyle = { ...allStyle, aspectRatio: '1/1' };
    }
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle, aspectRatio: '1.5/1' };
    }
    if (size.isMobile) {
        allStyle = { ...allStyle };
    }
    return allStyle;
}
function WrapperParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        display: 'flex',
        width: '100%',
        height: '70%',
    };
    if (size.isLaptop || size.isTab || size.isMobile) {
        allStyle = { ...allStyle, height: '50%' };
    }
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle, height: '70%' };
    }
    if (size.isMobile) {
        allStyle = { ...allStyle };
    }
    return allStyle;
}
function PaginationSlideParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        flex: '0 0 18%',
        height: '5em',
        borderRadius: 5,
        overflow: 'hidden',
        marginBottom: 10,
        picture: {
            width: '100%',
            height: '100%',
            display: 'block',
            position: 'relative',

            img: {
                ...posAbs,
                objectFit: 'cover',
            },
        },
    };
    if (size.isLaptop || size.isTab || size.isMobile) {
        allStyle = { ...allStyle, flex: '0 0 23%' };
    }
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle, flex: '0 0 18%' };
    }
    if (size.isMobile) {
        allStyle = { ...allStyle, flex: '0 0 23%' };
    }
    return allStyle;
}
function PaginationParams(size: TwindowSize): any {
    let allStyle: SxProps = {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        gap: '2.5%',
        padding: '10px 0',
        height: 'fit-content',
        maxHeight: '11em',
        overflow: 'hidden',
    };
    if (size.isLaptop || size.isTab || size.isMobile) {
        allStyle = { ...allStyle, gap: '2.66%' };
    }
    if (size.isTab || size.isMobile) {
        allStyle = { ...allStyle, gap: '2.5%' };
    }
    if (size.isMobile) {
        allStyle = { ...allStyle, gap: '2.66%' };
    }
    return allStyle;
}
