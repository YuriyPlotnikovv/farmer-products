import { ButtonStyled } from './style';

export default function Button({ children, link, disabled, onClick, ...props }) {
  return (
    <ButtonStyled {...(link ? { to: link } : { as: 'button', onClick, type:'button' })} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
}
