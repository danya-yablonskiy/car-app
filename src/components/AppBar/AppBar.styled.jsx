import { Field, Form } from 'formik';
import styled from 'styled-components';
import { NumberInput } from './NumberInput';

export const FormStyled = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

export const Label = styled.label`
  color: #8a8a89;
  font-weight: 500;
  line-height: 1.28;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CombinedInputContainer = styled.div`
  display: flex;
`;

export const InputPrice = styled(Field)`
  border: none;
  display: flex;
  padding: 14px 18px;
  border-radius: 14px;
  background-color: #f7f7fb;
`;

export const InputSelect = styled(Field)`
  border: none;
  display: flex;
  padding: 14px 18px;
  border-radius: 14px;
  background-color: #f7f7fb;
  line-height: 1.111;
`;

export const InputFrom = styled(NumberInput)`
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  color: #121417;
  line-height: 1.111;
  border-radius: 14px 0px 0px 14px;
  background-color: #f7f7fb;
  padding: 14px 24px;
`;
export const InputTo = styled(NumberInput)`
  border: none;
  color: #121417;
  line-height: 1.111;
  border-radius: 0px 14px 14px 0px;
  background-color: #f7f7fb;
  padding: 14px 24px;
`;

export const SearchBtn = styled.button`
  margin-top: auto;
  /* width: 136px;
  height: 48px; */
  padding: 14px 44px;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-weight: 600;
  line-height: 1.42;
  &:hover {
    transform: scale(1.1);
  }
`;
