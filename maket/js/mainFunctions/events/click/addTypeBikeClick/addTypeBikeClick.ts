import { setActiveBike } from '@js/state/rentState/rentRouter';
type Tprops = {
    dispatch: (a: any)=>void,
    event : React.MouseEvent<HTMLButtonElement, MouseEvent>
}

const onClick = ({dispatch, event}: Tprops) => {
    const target = event.target as HTMLElement

    const button:HTMLElement | null = target.closest('#addTypeBike')

    if(!button){return}
    const typeBike = button.dataset.typeBike
    if((typeBike === 'alum') || (typeBike === 'carbon') || (typeBike === 'mountain') || (typeBike === 'city')){
        dispatch(setActiveBike(typeBike))
    }
}
export default onClick