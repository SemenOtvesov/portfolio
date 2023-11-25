import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import ButtonBox from './buttonBox';
import {
    TuserInfoCommonListItem,
    TuserInfoCommonListItemNames,
} from '@js/types/state/user/userState';

type Tprops = {
    type: TuserInfoCommonListItemNames;
    setAddendum: React.Dispatch<React.SetStateAction<boolean>>;
    setEditenum: React.Dispatch<React.SetStateAction<TuserInfoCommonListItem | undefined>>;
    edit?: undefined | TuserInfoCommonListItem;
};

const variants: Variants = {
    hidden: { height: 0, opacity: 0, y: 10 },
    visable: { height: 'auto', opacity: 1, y: 0 },
};

export default ({ type, setAddendum, setEditenum, edit }: Tprops) => {
    const [title, setTitle] = useState(edit ? edit.title : '');
    const [prise, setPrise] = useState<number>(edit ? edit.prise : 0);

    return (
        <motion.div
            initial={'hidden'}
            animate={'visable'}
            exit={'hidden'}
            variants={variants}
            className="statistics__left-popap"
        >
            <div className="statistics__left-popap-item">
                <div className="statistics__left-popap-item-title">Название</div>
                <input
                    value={title}
                    onChange={e => {
                        const target = e.target as HTMLInputElement;
                        setTitle(target.value);
                    }}
                    className="statistics__left-popap-item-input"
                />
            </div>
            <div className="statistics__left-popap-item">
                <div className="statistics__left-popap-item-title">
                    {type === 'income' ? 'Прибыль' : 'Стоимость'}
                </div>
                <input
                    type="number"
                    value={prise}
                    onChange={e => {
                        const target = e.target as HTMLInputElement;
                        setPrise(+target.value);
                    }}
                    className="statistics__left-popap-item-input"
                />
            </div>
            <div
                onClick={() => {
                    setAddendum(false);
                    setEditenum(undefined);
                }}
                className="statistics__left-popap-button-box"
            >
                <ButtonBox title={title} prise={prise} type={type} edit={edit} />
            </div>
        </motion.div>
    );
};
