import styled from 'styled-components';
export const CarList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 29px;
  margin-top: 50px;
  justify-content: center;
`;

export const CarItem = styled.li`
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ImgCar = styled.img`
  border-radius: 14px;
  flex-shrink: 0;
  height: 268px;
  object-fit: cover;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    lightgray 50% / cover no-repeat;
`;

export const CarInfoListFirst = styled.ul`
  margin-top: 8px;
  font-size: 12px;
  line-height: 18px;
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  flex-wrap: wrap;
 
`;

export const CarInfoListSecond = styled.ul`
  margin-top: 4px;
  font-size: 12px;
  line-height: 18px;
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  flex-wrap: wrap;
`;

export const CarInfoListItem = styled.li`
  &:not(:last-child) {
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }
  &:not(:first-child) {
    padding-left: 6px;
  }
`;

export const ModelSpan = styled.span`
  color: #3470ff;
`;

export const HeartBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background: transparent;
  &:hover {
    background-color: transparent;
  }
`;

export const ModelAndPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  font-weight: 500;
`;

export const ModelAndPriceText = styled.p`
  color: #121417;
  line-height: 1.5;
  font-weight: 500;
`;

export const Divider = styled.span`
  padding: 0 6px;
`;

export const CarDetailsList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  color: rgba(18, 20, 23, 0.5);
`;

export const CarDetailItem = styled.li`
  display: flex;
  font-weight: 400;
  line-height: 1.5;
  &:not(:last-child) {
    padding-right: 6px;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }
  &:not(:first-child) {
    padding-left: 6px;
  }
`;
