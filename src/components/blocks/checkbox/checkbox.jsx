import { LabelStyled, InputProductStyled } from './style';

export default function Checkbox({ title }) {
  return (
    <LabelStyled>
      <InputProductStyled type='checkbox' />
      {title}
    </LabelStyled>
  );
}
