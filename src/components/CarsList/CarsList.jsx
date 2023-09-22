import LearnMoreBtn from 'components/LearnMoreBtn/LearnMoreBtn';
import * as S from './CarsList.styled';
import { useDispatch } from 'react-redux';
import { deleteFavoritesItems, setFavoritesItems } from 'store/catalogSlice';
import { FavoriteIcon } from 'components/Icons/FavoriteIcon';

export const CarsList = ({ cars, favoritesItems }) => {
  const dispatch = useDispatch();

  return (
    <>
      <S.CarList>
        {cars.map(item => {
          return (
            <S.CarItem key={item.id}>
              <S.ImgCar src={item.img} alt={item.make} />
              <S.HeartBtn
                type="button"
                onClick={() =>
                  dispatch(
                    !!favoritesItems[item.id]
                      ? dispatch(deleteFavoritesItems(item))
                      : dispatch(setFavoritesItems(item))
                  )
                }
              >
                <FavoriteIcon isFavorite={!!favoritesItems[item.id]} />
              </S.HeartBtn>
              <S.ModelAndPriceWrapper>
                <S.ModelAndPriceText>
                  {item.make} <S.ModelSpan>{item.model}</S.ModelSpan>,{' '}
                  {item.year}
                </S.ModelAndPriceText>
                <S.ModelAndPriceText>{item.rentalPrice}</S.ModelAndPriceText>
              </S.ModelAndPriceWrapper>

              <S.CarInfoListFirst>
                <S.CarInfoListItem>
                  {item.address.split(',')[1]}
                </S.CarInfoListItem>
                <S.CarInfoListItem>
                  {item.address.split(',')[2]}
                </S.CarInfoListItem>
                <S.CarInfoListItem>{item.rentalCompany}</S.CarInfoListItem>
              </S.CarInfoListFirst>
              <S.CarInfoListSecond>
                <S.CarInfoListItem>{item.type}</S.CarInfoListItem>
                <S.CarInfoListItem>{item.model}</S.CarInfoListItem>
                <S.CarInfoListItem>{item.id}</S.CarInfoListItem>
                <S.CarInfoListItem>{item.functionalities[0]}</S.CarInfoListItem>
              </S.CarInfoListSecond>

              <LearnMoreBtn carItem={item} />
            </S.CarItem>
          );
        })}
      </S.CarList>
    </>
  );
};
