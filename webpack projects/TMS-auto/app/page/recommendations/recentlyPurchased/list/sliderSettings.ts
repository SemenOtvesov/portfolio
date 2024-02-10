import { TlistContext } from '@locTypes/context/carListContext';
import { RefObject } from 'react';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types/swiper-options';

interface Tprops extends TlistContext {
    isMibile: boolean;
    swiper?: RefObject<HTMLDivElement>;
}

const configurate: SwiperOptions = {
    speed: 400,
    spaceBetween: '1.1%',
    direction: 'horizontal',
    slidesPerView: 4,
    simulateTouch: false,

    breakpoints: {
        768: {
            spaceBetween: '2%',
            slidesPerView: 3,
            simulateTouch: true,
        },
        425: {
            slidesPerView: 'auto',
            spaceBetween: 15,
        },
    },
};

export default ({ swiper, sliderArrowLeft, sliderArrowRight, isMibile }: Tprops) => {
    if (!swiper || !swiper.current) return;
    if (!isMibile) {
        if (!sliderArrowLeft?.current || !sliderArrowRight?.current) return;
        configurate.navigation = {
            prevEl: sliderArrowLeft.current,
            nextEl: sliderArrowRight.current,
        };
    }

    return new Swiper(swiper.current, configurate);
};
