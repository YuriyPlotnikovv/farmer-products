import Logo from '/src/components/ui/logo/logo';
import { FooterStyled, FooterCopyrightStyled } from './style';

export default function Footer() {
  return (
    <FooterStyled>
      <Logo />
      <FooterCopyrightStyled>Создано 2023</FooterCopyrightStyled>
    </FooterStyled>
  );
}
