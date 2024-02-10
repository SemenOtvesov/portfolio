'use client';

import styled from '@emotion/styled';

export default (props: React.HTMLAttributes<HTMLDivElement>) => {
    const Span = styled.div({
        display: 'block',
        position: 'relative',
        width: '100%',
        aspectRatio: '1/1',
        cursor: 'pointer',
        ':before, :after': {
            transition: ' 0.3s ease',
            top: '50%',
            left: '0',
            position: 'absolute',
            height: '2px',
            width: '100%',
            backgroundColor: '#ffffffbe',
            borderRadius: '2px',
            content: "''",
        },
        ':before': { transform: 'rotate(-45deg)' },
        ':after': { transform: 'rotate(45deg)' },
        ':hover': {
            ':before, :after': { backgroundColor: '#fff' },
        },
    });
    return (
        <div {...props}>
            <Span />
        </div>
    );
};
