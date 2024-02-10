'use client';
import useAppSelector from 'ts/hooks/useAppSelector';
import style from './style';
import Card from '@components/helpers/carCard/card';
import { useContext, useEffect } from 'react';
import sliderSettings from './sliderSettings';
import { ListContext } from '..';

export default () => {
    const { CardList, size } = style();
    const recentlyPurchased = useAppSelector(state => state.carState.recentlyPurchased);
    const { sliderArrowLeft, sliderArrowRight, swiper } = useContext(ListContext);

    useEffect(() => {
        const retSwiper = sliderSettings({
            swiper,
            sliderArrowLeft,
            sliderArrowRight,
            isMibile: size.isMobile,
        });
        return () => retSwiper?.destroy();
    });

    return (
        <div className="swiper" ref={swiper}>
            <CardList className={`swiper-wrapper ${size.isMobile ? 'swiper-scrollbar' : ' '}`}>
                {recentlyPurchased.map(recently => (
                    <Card key={recently.id} card={recently} />
                ))}
            </CardList>
        </div>
    );
};
