import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export type TwindowSize = {
    isMobile: boolean;
    isTab: boolean;
    isLaptop: boolean;
    isDesktop: boolean;
};

export default (): TwindowSize => {
    const [scrollWidth, setScrollWidth] = useState(769);
    const ret = {
        isMobile: scrollWidth <= 425,
        isTab: scrollWidth > 425 && scrollWidth < 769,
        isLaptop: scrollWidth > 768 && scrollWidth < 1440,
        isDesktop: scrollWidth >= 1440,
    };

    useEffect(() => {
        resizeFn(setScrollWidth, new Event(''));
        const bindFn = resizeFn.bind(this, setScrollWidth);
        window.addEventListener('resize', bindFn);
        return () => window.removeEventListener('resize', bindFn);
    }, []);
    useEffect(() => {
        ret.isMobile = scrollWidth <= 425;
        ret.isTab = scrollWidth > 425 && scrollWidth < 769;
        ret.isLaptop = scrollWidth > 768 && scrollWidth < 1440;
        ret.isDesktop = scrollWidth > 1440;
    }, [scrollWidth]);
    return ret;
};
function resizeFn(setScrollWidth: Dispatch<SetStateAction<number>>, e: Event) {
    setScrollWidth(
        Math.max(
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.body.clientWidth,
            document.documentElement.clientWidth,
        ),
    );
}
