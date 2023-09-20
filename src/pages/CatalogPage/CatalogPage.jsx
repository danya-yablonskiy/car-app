import { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalogThunk } from 'store/options';
import {
  carsSelector,
  favoriteCarsSelector,
  filtersSelector,
  loadingSelector,
} from 'store/selectors';
import { filterCars, getCars } from 'utils';
import { CarsList } from 'components/CarsList/CarsList';
import AppBar from 'components/AppBar/AppBar';
import { LoadMoreBtn, LoadMoreBtnWrapper } from './CatalogPage.styled';
import { Loader } from 'components/Loader/Loader';

const CatalogPage = () => {
  const favoritesItems = useSelector(favoriteCarsSelector);
  const carsSelected = useSelector(carsSelector);
  const filters = useSelector(filtersSelector);
  const isLoading = useSelector(loadingSelector);

  const [page, setPage] = useState(1);

  const [paginatedCars, setPaginatedCars] = useState([]);

  const buttonRef = useRef(null);

  const dispatch = useDispatch();

  const filteredCars = useMemo(
    () => filterCars(carsSelected, filters),
    [carsSelected, filters]
  );

  const shouldRenderShowMore =
    !(filteredCars.length === paginatedCars.length) && !isLoading;

  useEffect(() => {
    setPage(1);
    setPaginatedCars([]);
  }, [filters]);

  useEffect(() => {
    if (page === 1) {
      setPaginatedCars(getCars(filteredCars, 1));
    }

    if (page > 1) {
      setPaginatedCars(prevCars => [
        ...prevCars,
        ...getCars(filteredCars, page),
      ]);
    }
  }, [carsSelected, filteredCars, filters, page]);

  useEffect(() => {
    dispatch(getCatalogThunk());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      {isLoading ? (
        <Loader />
      ) : (
        <CarsList cars={paginatedCars} favoritesItems={favoritesItems} />
      )}

      {shouldRenderShowMore && (
        <LoadMoreBtnWrapper>
          <LoadMoreBtn
            onClick={() => setPage(prev => prev + 1)}
            ref={buttonRef}
          >
            Load more
          </LoadMoreBtn>
        </LoadMoreBtnWrapper>
      )}
    </>
  );
};

export default CatalogPage;
