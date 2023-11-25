import React from 'react';
import { FieldError } from 'react-hook-form';
import { motion } from 'framer-motion';

interface Tprops extends React.HTMLAttributes<HTMLDivElement> {
    error: FieldError | undefined;
    value: string;
}

export default ({ error, value, ...props }: Tprops) => {
    return (
        <div {...props} className={`input-rightDie ${props.className ? props.className : ''}`}>
            {createIcon({ error, value })}
        </div>
    );
};

function createIcon({ error, value }: Tprops) {
    if (!value) {
        return <></>;
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`icon-${!error ? 'check' : 'plus'}`}
        ></motion.div>
    );
}
