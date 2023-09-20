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
          <S.CarInfo>
            {carItem.address.split(',')[1]} <span>|</span>{' '}
            {carItem.address.split(',')[2]} <span>|</span> Id:{carItem.id}{' '}
            <span>|</span> Year: {carItem.year} | Type: {carItem.type} Fuel
            consumption: {carItem.fuelConsumption} | Engine size:{' '}
            {carItem.engineSize}
          </S.CarInfo>
          <S.CarDescription>{carItem.description}</S.CarDescription>
          <S.FufunctionalitiesTitle>
            Accessories and functionalities:
          </S.FufunctionalitiesTitle>
          {/* <S.CarInfo>
            {carItem.address.split(',')[1]} <span>|</span>{' '}
            {carItem.address.split(',')[2]} <span>|</span> Id:{carItem.id}{' '}
            <span>|</span> Year: {carItem.year} | Type: {carItem.type} Fuel
            consumption: {carItem.fuelConsumption} | Engine size:{' '}
            {carItem.engineSize}
          </S.CarInfo> */}
          <S.CarAandD>
            {[...carItem.accessories, ...carItem.functionalities].map(item => <S.CarAandDItem key={item}>{item }</S.CarAandDItem>)}
          </S.CarAandD>
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
