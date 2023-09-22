import { Formik } from 'formik';
import marksData from '../../../src/makes.json';
import priceData from '../../../src/price.json';
import {
  FormStyled,
  InputFrom,
  InputSelect,
  InputTo,
  Label,
  SearchBtn,
  CombinedInputContainer,
  InputPrice,
} from './AppBar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from 'store/catalogSlice';
import { filtersSelector } from 'store/selectors';
import * as Yup from 'yup';

const AppBar = () => {
  const dispatch = useDispatch();
  const initialFilters = useSelector(filtersSelector);

  return (
    <Formik
      initialValues={initialFilters}
      validationSchema={Yup.object().shape({
        make: Yup.string(),
        rentalPrice: Yup.number(),
        mileageFrom: Yup.number(),
        mileageTo: Yup.number(),
      })}
      onSubmit={values => dispatch(setFilters(values))}
    >
      {({ handleChange, setFieldValue, values }) => (
        <FormStyled>
          <Label>
            Car brand:
            <InputSelect
              name="make"
              as="select"
              type="text"
              placeholder="Enter the text"
              onChange={handleChange}
            >
              <>
                <option key="empty" value="">
                  Enter text
                </option>
                {marksData.map(item => (
                  <option key={item.id} value={item.carName}>
                    {item.carName}
                  </option>
                ))}
              </>
            </InputSelect>
          </Label>

          <Label>
            Price/ 1 hour
            <InputPrice
              onChange={handleChange}
              name="rentalPrice"
              as="select"
              placeholder="To $"
            >
              <>
                <option key="empty" value={0}>
                  To $
                </option>
                {priceData.map(item => (
                  <option key={item.id} value={item.carPrice}>
                    {item.carPrice} $
                  </option>
                ))}
              </>
            </InputPrice>
          </Label>

          <Label>
            Car mileage / km
            <CombinedInputContainer>
              <InputFrom
                prefix="From "
                value={values.mileageFrom}
                onValueChange={value =>
                  setFieldValue('mileageFrom', value.floatValue)
                }
                placeholder="From"
              />
              <InputTo
                prefix="To "
                value={values.mileageTo}
                onValueChange={value =>
                  setFieldValue('mileageTo', value.floatValue)
                }
                placeholder="To"
              />
            </CombinedInputContainer>
          </Label>

          <SearchBtn type="submit">Search</SearchBtn>
        </FormStyled>
      )}
    </Formik>
  );
};

export default AppBar;
