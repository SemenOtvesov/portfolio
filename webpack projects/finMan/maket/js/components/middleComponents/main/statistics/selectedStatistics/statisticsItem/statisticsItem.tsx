import React, { useState, useEffect } from 'react';
import Popap from './popap';
import { AnimatePresence } from 'framer-motion';
import {
    TuserInfoCommonListItem,
    TuserInfoCommonListItemNames,
} from '@js/types/state/user/userState';
import SelectedStatisticsList from './selectedStatisticsList';
import summItemsPrise from './summItemsPrise';

type Tprops = {
    title: string;
    summaryTitle: string;
    subItems: TuserInfoCommonListItem[] | undefined;
    type: TuserInfoCommonListItemNames;
};

export default ({ title, summaryTitle, subItems, type }: Tprops) => {
    const [addendum, setAddendum] = useState<boolean>(false);
    const [editenum, setEditenum] = useState<undefined | TuserInfoCommonListItem>();

    return (
        <div className="statistics__left-item">
            <div className="statistics__left-item-title">
                {title}
                <div className="statistics__left-item-title-summ">
                    {summaryTitle}
                    {summItemsPrise(subItems)}
                </div>
            </div>
            <div className="statistics__left-item-main">
                <div className="statistics__left-item-list">
                    <SelectedStatisticsList setEditenum={setEditenum} subItems={subItems} />
                </div>
                <button
                    onClick={() => setAddendum(!addendum)}
                    className={`statistics__left-item-button ${!addendum ? 'visable' : ' '}`}
                >
                    Добавить
                </button>
                <AnimatePresence>
                    {addendum ? (
                        <Popap
                            key={addendum + title}
                            setAddendum={setAddendum}
                            setEditenum={setEditenum}
                            type={type}
                        />
                    ) : (
                        ''
                    )}
                    {editenum ? (
                        <Popap
                            key={editenum.id + editenum.title}
                            setAddendum={setAddendum}
                            setEditenum={setEditenum}
                            type={type}
                            edit={editenum}
                        />
                    ) : (
                        ''
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
