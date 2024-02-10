import React from 'react';
import { Tprops } from '..';
import ArrowButton from '../../arrowButton';

export default ({ type }: Tprops) => {
    return (
        <ArrowButton
            type={type === 'calc' || type === 'othersQuestions' ? 'red' : 'white'}
            content={type == 'calc' ? 'РАССЧИТАТЬ СТОИМОСТЬ' : 'БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ'}
        />
    );
};
