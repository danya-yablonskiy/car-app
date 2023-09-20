import { useState } from 'react';
import { NumericFormat } from 'react-number-format';

export const NumberInput = ({ prefix, ...props }) => {
  const [value, setValue] = useState('');

  return (
    <NumericFormat
      valueIsNumericString
      thousandSeparator
      decimalScale={0}
      allowNegative={false}
      prefix={prefix}
      value={value}
      onValueChange={vals => setValue(vals.formattedValue)}
      {...props}
    />
  );
};
