'use client';
import { Button } from '@mui/material';
import style from './style';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import React from 'react';

export type Ttype = 'red' | 'white' | 'dark';
interface Tprops extends React.HTMLAttributes<HTMLButtonElement> {
    content: string;
    type: Ttype;
}

export default ({ content, type, ...props }: Tprops) => {
    const { ButtonSx } = style();
    return (
        <Button type="submit" sx={ButtonSx(type)} {...props}>
            {content}
            <ArrowOutwardIcon style={{ fontSize: '1.25em' }} />
        </Button>
    );
};
