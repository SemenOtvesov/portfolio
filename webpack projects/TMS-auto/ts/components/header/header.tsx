'use client';
import React, { ReactElement } from 'react';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';
import Image from '../helpers/image/image';
import Item from './item/item';
import style from './style';
import HeaderSublist from './headerSublist/index';
import { AnimatePresence } from 'framer-motion';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import Link from 'next/link';

export default () => {
    const { AppBarSx, ImageBox, imageStyle, itemBoxSx, AppBarWrapitem, size } = style();

    let content: undefined | ReactElement;
    if (size.isMobile) {
        content = (
            <div>
                <AppBar sx={AppBarSx}>
                    <AppBarWrapitem>
                        <Item type="office" />
                        <Item type="message" />
                    </AppBarWrapitem>
                    <AppBarWrapitem>
                        <ImageBox>
                            <Link href={'/'}>
                                <Image style={imageStyle} imageType="icon" imageName="logo" svg />
                            </Link>
                        </ImageBox>

                        <Item type="calc" />
                        <Item type="close" />
                    </AppBarWrapitem>
                    <AnimatePresence>
                        <HeaderSublist />
                    </AnimatePresence>
                </AppBar>
            </div>
        );
    } else {
        content = (
            <div>
                <AppBar sx={AppBarSx}>
                    <ImageBox>
                        <Link href={'/'}>
                            <Image style={imageStyle} imageType="icon" imageName="logo" svg />
                        </Link>
                    </ImageBox>
                    <Box sx={itemBoxSx}>
                        <Item type="office" />
                        <Item type="message" />
                        <Item type="calc" />
                        <Item type="close" />
                    </Box>
                    <AnimatePresence>
                        <HeaderSublist />
                    </AnimatePresence>
                </AppBar>
            </div>
        );
    }
    return <Provider store={store}>{content}</Provider>;
};
