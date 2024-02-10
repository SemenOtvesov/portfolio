'use client';
import StatisticsAll from '@ts/components/statisticsAll';
import { Tcountry } from '@locTypes/state/carState';
import { useParams } from 'next/navigation';
import React from 'react';

type Tprops = {
    type: Tcountry;
};

export default ({ type }: Tprops) => {
    const { brand }: { brand: string } = useParams();
    return <StatisticsAll type={type} brand={brand} />;
};
