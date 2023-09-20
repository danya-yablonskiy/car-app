import { CarsList } from 'components/CarsList/CarsList';
import { useSelector } from 'react-redux';
import { favoriteCarsSelector } from 'store/selectors';
import { EmptyState } from './FavoritesPage.styled';

const FavoritesPage = () => {
  const favoritesItems = useSelector(favoriteCarsSelector);

  return (
    <>
      {Object.values(favoritesItems).length ? (
        <CarsList
          cars={Object.values(favoritesItems)}
          favoritesItems={favoritesItems}
        />
      ) : (
        <EmptyState>No favorites yet</EmptyState>
      )}
    </>
  );
};

export default FavoritesPage;
