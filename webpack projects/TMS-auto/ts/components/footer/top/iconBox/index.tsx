'use client';
import style from './style';
import NextImage from 'next/image';

import InstagramIcon from 'img/icons/Instagram.png';
import WhatsAppIcon from 'img/icons/WhatsApp.png';
import TelegramIcon from 'img/icons/Telegram.png';
import VKIcon from 'img/icons/VK.png';
import YoutubeIcon from 'img/icons/Youtube.png';
import Link from 'next/link';

export default () => {
    const { IconBox, Icon } = style();
    return (
        <IconBox>
            <Link href={'https://instagram.com/tmcavto'}>
                <Icon>
                    <NextImage src={InstagramIcon} alt="" />
                </Icon>
            </Link>
            <Link href={'https://t.me/tmcavto'}>
                <Icon>
                    <NextImage src={TelegramIcon} alt="" />
                </Icon>
            </Link>
            <Link
                href={
                    'https://api.whatsapp.com/send/?phone=%2B79149607799&text&type=phone_number&app_absent=0'
                }
            >
                <Icon>
                    <NextImage src={WhatsAppIcon} alt="" />
                </Icon>
            </Link>
            <Link href={'https://www.youtube.com/@TMCAVTO'}>
                <Icon>
                    <NextImage src={YoutubeIcon} alt="" />
                </Icon>
            </Link>
            <Link href={'https://vk.com/tmcavto'}>
                <Icon>
                    <NextImage src={VKIcon} alt="" />
                </Icon>
            </Link>
        </IconBox>
    );
};
