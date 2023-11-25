import { AnimatePresence, Variants, motion } from 'framer-motion';
import React, { useState } from 'react';

const monthList = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
];

type Tprops = {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
};

const varisntsUl: Variants = {
    initial: {
        height: 0,
        opacity: 0,
    },
    animate: {
        height: 'auto',
        opacity: 1,
    },
};
const variantsLi: Variants = {
    initial: {
        opacity: 0,
        x: -10,
    },
    animate: (custom: number) => ({
        opacity: 1,
        x: 0,
        transition: { delay: custom * 0.05 },
    }),
};

export default ({ name, setName }: Tprops) => {
    const [active, setActive] = useState<boolean>(false);

    return (
        <div className="statistics__right-add-select">
            <button
                onClick={() => setActive(prevSt => !prevSt)}
                className={`statistics__right-add-select-button ${active ? 'active' : ' '}`}
            >
                {name}
                <div className={`statistics__right-add-select-arrow ${active ? 'active' : ' '}`}>
                    <span></span>
                </div>
            </button>
            <AnimatePresence>
                {active ? (
                    <motion.ul
                        initial={'initial'}
                        animate={'animate'}
                        exit={'initial'}
                        variants={varisntsUl}
                        className="statistics__right-add-select-list"
                    >
                        {monthList.map((month, i) => (
                            <motion.li
                                custom={i}
                                initial={'initial'}
                                animate={'animate'}
                                exit={'initial'}
                                variants={variantsLi}
                                className="statistics__right-add-select-item"
                                onClick={() => {
                                    setName(month), setActive(false);
                                }}
                            >
                                {month}
                            </motion.li>
                        ))}
                    </motion.ul>
                ) : (
                    ''
                )}
            </AnimatePresence>
        </div>
    );
};
