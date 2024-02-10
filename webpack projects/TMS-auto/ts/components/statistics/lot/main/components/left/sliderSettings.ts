import { TlistContext } from '@locTypes/context/carListContext';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types/swiper-options';
import 'swiper/css/pagination';

const configurate: SwiperOptions = {
    speed: 400,
    direction: 'horizontal',
    slidesPerView: 'auto',
    resizeObserver: false,
};

export default ({ swiper, sliderArrowLeft, sliderArrowRight }: TlistContext) => {
    if (!swiper || !swiper.current) return;
    if (!sliderArrowLeft?.current || !sliderArrowRight?.current) return;
    configurate.navigation = {
        prevEl: sliderArrowLeft.current,
        nextEl: sliderArrowRight.current,
    };

    const slider = new Swiper(swiper.current, configurate);
    slider.on('slideChange', info => {
        if (!sliderArrowLeft.current || !sliderArrowRight.current) return;
        if (info.activeIndex === 0) {
            sliderArrowLeft.current.setAttribute('style', 'opacity: 0');
        } else {
            sliderArrowLeft.current.setAttribute('style', 'opacity: 1');
        }

        if (info.activeIndex === info.slides.length - 1) {
            sliderArrowRight.current.setAttribute('style', 'opacity: 0');
        } else {
            sliderArrowRight.current.setAttribute('style', 'opacity: 1');
        }
    });
    return slider;
};
