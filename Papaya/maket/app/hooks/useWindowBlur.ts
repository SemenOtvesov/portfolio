import React, { useEffect, useState } from 'react';

type Treturn = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

export default (): Treturn => {
    const [windowBlur, setWindowBlur] = useState(false);
    useEffect(() => {
        document.body.setAttribute('style', 'overflow: hidden;');
    }, [windowBlur]);
    return [windowBlur, setWindowBlur];
};
