import { useSelector, useDispatch } from 'react-redux';
import { deleteFavoritesItems, setFavoritesItems } from 'store/catalogSlice';
import { favoriteCarsSelector } from 'store/selectors';

export const useFavoriteItems = () => {
  const dispatch = useDispatch();
  const favoritesSelector = useSelector(favoriteCarsSelector);

  return {
    favoritesItems: favoritesSelector,
    dispatchSetFavoriteItem: item => dispatch(setFavoritesItems(item)),
    dispatchDeleteFavoriteItem: item => dispatch(deleteFavoritesItems(item)),
  };
};
