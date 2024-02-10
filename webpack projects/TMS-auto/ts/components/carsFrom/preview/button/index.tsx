'use client';
import style from './style';
import { Button } from '@mui/material';
import SubtractIcon from 'img/icons/Subtract.png';
import Image from 'next/image';

export default () => {
    const { ButtonSx, ImageContainer } = style();
    return (
        <Button sx={ButtonSx} variant="outlined">
            БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ
            <ImageContainer>
                <Image src={SubtractIcon} alt="" />
            </ImageContainer>
        </Button>
    );
};
