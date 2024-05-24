import { selectAsideContent, selectShowAside } from '../store/reducers/aside.reducer';
import { useAppDispatch, useAppSelector } from './useStore';

export const useAside = () => {
  const dispatch = useAppDispatch();
  const showAside = useAppSelector(selectShowAside);
  const content = useAppSelector(selectAsideContent);

  return{
    dispatch,
    showAside,
    content
  };
};