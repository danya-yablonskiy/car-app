import styled from 'styled-components';
import { ReactComponent as closeModalSvgStyled } from '../Icons/x.svg';
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  position: relative;
  background-color: #fff;
  width: 541px;
  height: 752px;
  border-radius: 24px;
  padding: 40px;
`;

export const ModalImg = styled.img`
  border-radius: 14px;
  width: 100%;
  height: 350px;
`;

export const CloseModalBtn = styled.button`
  position: absolute;
  background: transparent;
  top: 16px;
  right: 16px;
  &:hover {
    background-color: transparent;
  }
`;

export const CloseModalSvg = styled(closeModalSvgStyled)``;

export const ModelAndPriceText = styled.p`
  margin-top: 14px;
  color: #121417;
  line-height: 1.3333;

  font-size: 18px;
`;

export const ModelSpan = styled.span`
  color: #3470ff;
`;

export const CarInfo = styled.p`
  font-size: 12px;
  margin-top: 8px;
  color: rgba(18, 20, 23, 0.5);
  width: 277px;
  margin-bottom: 14px;
`;

export const RentalCarLink = styled.a`
  display: inline-block;
  margin-top: 24px;
  padding: 12px 50px;
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;
  line-height: 1.42;
  font-weight: 600;
`;

export const CarDescription = styled.span`
  margin-top: 5px;
  font-size: 14px;
  line-height: 20px;
`;

export const FufunctionalitiesTitle = styled.p`
  font-size: 14px;
  margin-top: 8px;
  line-height: 20px;
`;

export const RentalTitle = styled.p`
  font-size: 14px;
  line-height: 20px;
`;

export const RentalList = styled.ul`
  display: inline-flex;
  color: #363535;
  flex-wrap: wrap;
  row-gap: 8px;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
export const RentalItem = styled.li`
  &:not(:last-child) {
    margin-right: 8px;
  }
  display: inline-flex;
  border-radius: 35px;
  background: #f9f9f9;
  padding: 7px 14px;
`;

export const RentalItemHighlight = styled.span`
  color: #3470ff;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;


export const CarAandD = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
export const CarAandDItem = styled.li`
  word-break: break-word;
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
  font-weight: 400;
  line-height: 18px;
  &:not(:first-child){
    padding-left: 6px
  }
`;