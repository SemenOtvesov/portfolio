import { TrootState } from '@store/index';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const useAppSelector: TypedUseSelectorHook<TrootState> = useSelector;
export default useAppSelector;
