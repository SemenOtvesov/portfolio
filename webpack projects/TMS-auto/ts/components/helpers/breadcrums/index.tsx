'use client';
import { Breadcrumbs, Link, SxProps } from '@mui/material';
import { useParams, usePathname } from 'next/navigation';
import React from 'react';
import comparison, { TpathNames } from './comparison';
import LinkNext from 'next/link';
import { $gray, $hover } from '@ts/style/allStyled/colors';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { TurlParams } from '@locTypes/urlPath';
import useWindowSizeCheck, { TwindowSize } from 'ts/hooks/useWindowSizeCheck';

type Tprops = {};
export default ({}: Tprops) => {
    const path = usePathname() as any;
    const split: Array<TpathNames> = path.split('/');
    const { brand, model, lot }: TurlParams = useParams();
    const locComparsion = comparison([brand, model, lot]);
    const size = useWindowSizeCheck();

    return (
        <Breadcrumbs
            sx={{
                '.MuiBreadcrumbs-separator': {
                    margin: size.isMobile ? '0 2px' : '0.8px',
                },
            }}
            separator={<NavigateNextIcon sx={{ color: $hover }} fontSize="small" />}
        >
            {split.map(el => (
                <Link
                    key={el}
                    component={LinkNext}
                    href={generatePath(el, split)}
                    sx={LinkSx(split[split.length - 1], el, size)}
                >
                    {el === '' ? locComparsion['/'] : locComparsion[el]}
                </Link>
            ))}
        </Breadcrumbs>
    );
};
const LinkSx = (path: string, el: string, size: TwindowSize): SxProps => {
    return {
        transition: '0.3s',
        fontSize: size.isMobile ? '8px' : '10px',
        color: path === el ? $gray : $hover,
        textDecoration: `none`,
        borderBottom: path !== el ? `1px solid ${$hover}` : '',
        paddingBottom: '2px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end',
        ':hover': { color: $hover, opacity: 0.8 },
    };
};
const generatePath = (el: string, splitArr: string[]) => {
    let path = '';
    if (el === '') {
        return '/';
    }

    for (let i = 0; i <= splitArr.indexOf(el); i++) {
        path += splitArr[i] + '/';
    }

    return path;
};
