import { ButtonStyled } from './style';

export default function Button({ children, disabled }) {
  return <ButtonStyled disabled={disabled} type='button'>{children}</ButtonStyled>;
}
