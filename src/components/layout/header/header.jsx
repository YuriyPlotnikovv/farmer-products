import Logo from "../../ui/logo/logo";
import Navigation from "../navigation/navigation";
import { HeaderStyled } from './style';

export default function Header() {
  return (
    <HeaderStyled>
      <Logo />
      <Navigation />
    </HeaderStyled>
  );
}
