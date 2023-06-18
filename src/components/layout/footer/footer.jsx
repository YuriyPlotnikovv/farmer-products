import Logo from '../../ui/logo/logo';
import { FooterStyled, FooterCopyrightStyled } from './style';

export default function Footer() {
  return (
    <FooterStyled>
      <Logo />
      <FooterCopyrightStyled>Создано 2021</FooterCopyrightStyled>
    </FooterStyled>
  );
}
