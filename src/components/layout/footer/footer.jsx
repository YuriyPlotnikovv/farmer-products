import Logo from "../../ui/logo/logo";
import { FooterStyled } from './style';

export default function Footer() {
  return (
    <FooterStyled>
      <Logo />
      <span className="footer__copyright">Создано 2021</span>
    </FooterStyled>
  );
}
