'use client';
import List from './list/index';
import style from './style';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { createContext, useRef } from 'react';
import { TlistContext } from '@locTypes/context/carListContext';
import 'swiper/css';
import arrowClick from './arrowClick';

export const ListContext = createContext<TlistContext>({});

export default () => {
    const { Container, Title, TextBox, Text, SliderButton, SliderArrow, size } = style();
    const sliderArrowLeft = useRef<HTMLDivElement>(null);
    const sliderArrowRight = useRef<HTMLDivElement>(null);
    const swiper = useRef<HTMLDivElement>(null);

    return (
        <ListContext.Provider value={{ sliderArrowLeft, sliderArrowRight, swiper }}>
            <Container>
                <Title>Недавно купленные авто</Title>
                <TextBox>
                    <Text>
                        Указаны итоговые стоимости недавно привезённых автомобилей со всеми
                        расходами во Владивосток
                    </Text>
                    {!size.isMobile && (
                        <SliderButton>
                            <SliderArrow
                                onClick={() => arrowClick({ type: 'left', swiper })}
                                ref={sliderArrowLeft}
                                className="swiper-button-prev"
                            >
                                <ArrowBackIosNewIcon />
                            </SliderArrow>
                            <SliderArrow
                                onClick={() => arrowClick({ type: 'right', swiper })}
                                ref={sliderArrowRight}
                                className="swiper-button-next"
                                style={{ transform: 'rotate(180deg)' }}
                            >
                                <ArrowBackIosNewIcon />
                            </SliderArrow>
                        </SliderButton>
                    )}
                </TextBox>
                <List />
            </Container>
        </ListContext.Provider>
    );
};
