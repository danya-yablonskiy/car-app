import { useState } from 'react';
import * as S from './LearnMoreBtn.styled';
import { Modal } from 'components/Modal/Modal';

const LearnMoreBtn = ({carItem}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <Modal closeModal={() => setShowModal(false)} carItem={carItem}/>}
      <S.LearnMoreBtn onClick={() => setShowModal(true)} type="button">
        Learn more
      </S.LearnMoreBtn>
    </>
  );
};

export default LearnMoreBtn;
