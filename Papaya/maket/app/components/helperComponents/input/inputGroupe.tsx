import React from 'react';
import { motion } from 'framer-motion';

interface Tprops extends React.HTMLAttributes<HTMLDivElement> {
    groupeTitle?: string;
    groupeClassName?: string;
}
function inputGroupe({ groupeClassName, groupeTitle, children, ...props }: Tprops) {
    return (
        <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0, margin: '-20px 0 0 0' }}
            transition={{ duration: 0.2 }}
        >
            <div {...props} className={`input-groupe ${props.className ? props.className : ''}`}>
                {groupeTitle ? (
                    <div className={`input-groupe__title ${groupeClassName}`}>{groupeTitle}</div>
                ) : (
                    ''
                )}
                <div className="input-groupe__main">{children}</div>
            </div>
        </motion.div>
    );
}
export default inputGroupe;
