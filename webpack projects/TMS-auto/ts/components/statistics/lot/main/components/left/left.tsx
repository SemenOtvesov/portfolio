import React, { useEffect, useRef } from 'react';
import style from './style';
import Image from '@ts/components/helpers/image/image';
import { Car } from '@locTypes/state/carState';
import sliderSettings from './sliderSettings';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Swiper from 'swiper';

type Tprops = { lot: Car };

export default ({ lot }: Tprops) => {
    const { Left, Swiper, Wrapper, Slide, LeftArrow, RightArrow, Pagination, PaginationSlide } =
        style();

    const swiper = useRef<HTMLDivElement>(null);
    const sliderArrowLeft = useRef<HTMLDivElement>(null);
    const sliderArrowRight = useRef<HTMLDivElement>(null);

    let slider: undefined | Swiper;
    useEffect(() => {
        slider = sliderSettings({ swiper, sliderArrowLeft, sliderArrowRight });
        if (slider) return () => slider?.destroy();
    }, []);

    return (
        <Left>
            <Swiper className="swiper" ref={swiper}>
                <Wrapper className="swiper-wrapper">
                    {lot?.images?.map(image => (
                        <Slide key={image} className="swiper-slide">
                            <Image
                                imageName={image.split('.jpg')[0]}
                                imageType="image"
                                sourseMod={false}
                            />
                        </Slide>
                    ))}
                </Wrapper>
                <LeftArrow
                    ref={sliderArrowLeft}
                    onClick={() => slider?.slidePrev()}
                    className="swiper-button-prev"
                    style={{ opacity: 0 }}
                >
                    <ArrowBackIosNewIcon />
                </LeftArrow>
                <RightArrow
                    ref={sliderArrowRight}
                    onClick={() => slider?.slideNext()}
                    className="swiper-button-next"
                >
                    <ArrowBackIosNewIcon />
                </RightArrow>

                <Pagination className="swiper-pagination">
                    {lot.images.map(image => (
                        <PaginationSlide onClick={() => slider?.slideTo(lot.images.indexOf(image))}>
                            <Image
                                imageName={image.split('.jpg')[0]}
                                imageType="image"
                                sourseMod={false}
                            />
                        </PaginationSlide>
                    ))}
                </Pagination>
            </Swiper>
        </Left>
    );
};
