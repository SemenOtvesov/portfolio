import { TrootState } from '@state/store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const useAppSelector: TypedUseSelectorHook<TrootState> = useSelector;
export default useAppSelector;
