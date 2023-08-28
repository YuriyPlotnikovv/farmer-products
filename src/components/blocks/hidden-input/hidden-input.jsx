import { LabelStyled, InputProductStyled } from './style';

export default function HiddenInput({ value, checked, name, onChange, type }) {
  return (
    <LabelStyled>
      <InputProductStyled value={value} checked={checked} name={name} onChange={() => onChange(value)} type={type} />
    </LabelStyled>
  );
}
