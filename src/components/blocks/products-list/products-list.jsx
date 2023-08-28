import Checkbox from '../checkbox/checkbox';
import { ProductsList, ProductsElement } from './style';

export default function CheckboxList({ selectValues, options, name, onChange, onClickLabel = () => {} }) {
  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue);
  };

  return (
    <ProductsList>
      {options.map((option, index) => (
        <ProductsElement key={option.value}>
          <Checkbox
            selectValues={selectValues}
            isChecked={selectValues.includes(option.value)}
            name={name}
            value={option.value}
            text={option.title}
            onClick={(value) => onClickLabel(value, index)}
            onChange={handleChange} />
        </ProductsElement>
      ))}
    </ProductsList>
  )
}
