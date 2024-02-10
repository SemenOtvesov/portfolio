import { RefObject } from 'react';

export type TlistContext = {
    sliderArrowLeft?: RefObject<HTMLDivElement>;
    sliderArrowRight?: RefObject<HTMLDivElement>;
    swiper?: RefObject<HTMLDivElement>;
};
