import { createPortal } from 'react-dom';
import * as S from './Modal.styled';
import { useHandleKeyDown, useLockBody } from './hooks';
import { formatMileage } from 'utils';

const ModalSurface = ({ children }) =>
  createPortal(children, document.querySelector('#modal-root'));

export const Modal = ({ closeModal, carItem }) => {
  useHandleKeyDown(closeModal);

  useLockBody();

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <ModalSurface>
      <S.Overlay onClick={handleOverlayClick}>
        <S.ModalBody>
          <S.CloseModalBtn type="button" onClick={closeModal}>
            <S.CloseModalSvg />
          </S.CloseModalBtn>
          <S.ModalImg src={carItem.img} alt={carItem.make} />
          <S.ModelAndPriceText>
            {carItem.make} <S.ModelSpan>{carItem.model}</S.ModelSpan>,{' '}
            {carItem.year}
          </S.ModelAndPriceText>

          <S.CarInfoModalListFirst>
            <S.CarInfoModalListItem>
              {carItem.address.split(',')[1]}
            </S.CarInfoModalListItem>
            <S.CarInfoModalListItem>
              {carItem.address.split(',')[2]}
            </S.CarInfoModalListItem>
            <S.CarInfoModalListItem>
              Id:
              {carItem.id}
            </S.CarInfoModalListItem>
            <S.CarInfoModalListItem>
              Year: {carItem.year}
            </S.CarInfoModalListItem>
            <S.CarInfoModalListItem>
              Type: {carItem.type}
            </S.CarInfoModalListItem>
          </S.CarInfoModalListFirst>

          <S.CarInfoModalListSecond>
            <S.CarInfoModalListItem>
              Fuel consumption: {carItem.fuelConsumption}
            </S.CarInfoModalListItem>
            <S.CarInfoModalListItem>
              Engine size: {carItem.engineSize}
            </S.CarInfoModalListItem>
          </S.CarInfoModalListSecond>

          <S.CarDescription>{carItem.description}</S.CarDescription>
          <S.FufunctionalitiesTitle>
            Accessories and functionalities:
          </S.FufunctionalitiesTitle>

          <S.CarAandDListFirst>
            {[...carItem.accessories].map(item => (
              <S.CarAandDItem key={item}>{item}</S.CarAandDItem>
            ))}
          </S.CarAandDListFirst>

          <S.CarAandDListSecond>
            {[...carItem.functionalities].map(item => (
              <S.CarAandDItem key={item}>{item}</S.CarAandDItem>
            ))}
          </S.CarAandDListSecond>

          <S.RentalTitle>Rental Conditions:</S.RentalTitle>
          <S.RentalList>
            {carItem.rentalConditions.split('\n').map((item, index, arr) => {
              console.log({ arr });
              if (index === 0) {
                const [last, ...rest] = item.split(' ').reverse();

                return (
                  <S.RentalItem key={item}>
                    {[...rest].reverse().join(' ')}&nbsp;
                    <S.RentalItemHighlight>{last}</S.RentalItemHighlight>
                  </S.RentalItem> 
                );
              }
              return <S.RentalItem key={item}>{item}</S.RentalItem>;
            })}
            <S.RentalItem>
              Mileage:&nbsp;
              <S.RentalItemHighlight>
                {formatMileage(carItem.mileage)}
              </S.RentalItemHighlight>
            </S.RentalItem>
            <S.RentalItem>
              Price:&nbsp;
              <S.RentalItemHighlight>
                {carItem.rentalPrice}
              </S.RentalItemHighlight>
            </S.RentalItem>
          </S.RentalList>

          <S.RentalCarLink href="tel:+380730000000">Rental car</S.RentalCarLink>
        </S.ModalBody>
      </S.Overlay>
    </ModalSurface>
  );
};
