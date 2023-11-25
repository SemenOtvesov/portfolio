import React from 'react';
import handleClick from './generate/handleClick';
import useAppSelector from '@js/hooks/useAppSelector';

export default () => {
    const activeMonth = useAppSelector(state => state.userState.activeMonth);
    return (
        <button onClick={() => handleClick(activeMonth)} className="statistics__left-button">
            Создать отчёт
        </button>
    );
};
