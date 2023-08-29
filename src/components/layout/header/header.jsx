import Logo from "/src/components/ui/logo/logo";
import Navigation from "/src/components/layout/navigation/navigation";
import { HeaderStyled } from './style';

export default function Header() {
  return (
    <HeaderStyled>
      <Logo />
      <Navigation />
    </HeaderStyled>
  );
}
