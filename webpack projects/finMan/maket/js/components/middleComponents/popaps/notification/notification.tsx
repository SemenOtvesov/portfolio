import React from 'react';
import { motion } from 'framer-motion';

type Tprops = { value: string };

export default ({ value }: Tprops) => {
    return (
        <motion.div
            initial={{ x: 100 }}
            animate={{ x: 10 }}
            exit={{ x: 400 }}
            className="notification"
        >
            <div className="notification__title">Уведомление</div>
            <div className="notification__text">{value}</div>
        </motion.div>
    );
};
