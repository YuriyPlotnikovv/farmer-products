import { Label, LabelStyled } from './style';
import HiddenInput from '/src/components/blocks/hidden-input/hidden-input';

export default function Checkbox({ onClick, isChecked, name, value, text, onChange, ...props }) {
  return (
    <Label>
      <HiddenInput value={text} checked={isChecked} name={name} onChange={() => onChange(value)} {...props} type='checkbox' />
      <LabelStyled onClick={() => onClick(value)} $isChecked={isChecked}>
        {text}
      </LabelStyled>
    </Label>
  )
};
