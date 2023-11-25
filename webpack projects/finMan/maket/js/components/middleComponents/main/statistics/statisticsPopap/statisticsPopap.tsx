import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useAppDispatch from '@js/hooks/useAppDispatch';
import monthAddRequest from '@js/state/user/asyncThunk/monthAddRequest';
import PopapSelect from './popapSelect';

type Tprops = { setAddMonth: React.Dispatch<React.SetStateAction<boolean>> };

export default ({ setAddMonth }: Tprops) => {
    const dispatch = useAppDispatch();
    const [name, setName] = useState<string>('');

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="statistics__right-add"
        >
            <div className="statistics__right-add-box">
                <div className="statistics__right-add-title">Выберите месяц</div>
                <PopapSelect setName={setName} name={name} />
            </div>
            <div
                onClick={() => setAddMonth(prevSt => !prevSt)}
                className="statistics__right-add-button-box"
            >
                <button
                    onClick={() =>
                        dispatch(monthAddRequest({ title: name, year: new Date().getFullYear() }))
                    }
                    className="statistics__right-add-button"
                >
                    Добавить
                </button>
                <button className="statistics__right-add-button red">Отмена</button>
            </div>
        </motion.div>
    );
};
