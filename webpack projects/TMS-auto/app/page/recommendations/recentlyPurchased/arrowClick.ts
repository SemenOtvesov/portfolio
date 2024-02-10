import { RefObject } from 'react';
import Swiper from 'swiper';

type Tprops = { type: 'right' | 'left'; swiper: { current: any } };

const arrowClick = ({ type, swiper }: Tprops) => {
    const instSwiper = swiper.current.swiper as Swiper;
    if (type === 'left') {
        instSwiper.slidePrev();
    }
    if (type === 'right') {
        instSwiper.slideNext();
    }
};
export default arrowClick;
