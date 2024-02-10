import { SxProps } from '@mui/material';
import useWindowSizeCheck from 'ts/hooks/useWindowSizeCheck';
import { Ttype } from '.';
import { $background, $red } from '@ts/style/allStyled/colors';

export default () => {
    const size = useWindowSizeCheck();
    return {
        ButtonSx: (type: Ttype) => {
            return {
                transition: '0.3s',
                padding: '12px',
                borderRadius: '2px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: genBackground(type),
                color: genColor(type),
                ':hover': { backgroundColor: genBackground(type) },
            } as SxProps;
        },
    };
};

function genBackground(type: Ttype) {
    if (type === 'dark') return $background;
    if (type === 'red') return $red;
    if (type === 'white') return '#fff';
}
function genColor(type: Ttype) {
    if (type === 'dark') return '#fff';
    if (type === 'red') return '#fff';
    if (type === 'white') return $background;
}
