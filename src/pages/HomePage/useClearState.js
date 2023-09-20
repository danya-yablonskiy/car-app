import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearItems, setFilters } from 'store/catalogSlice';

export const useClearState = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setFilters({
        make: '',
        rentalPrice: 0,
        mileageFrom: 0,
        mileageTo: 0,
      })
    );
    dispatch(clearItems());
  }, [dispatch]);
};
