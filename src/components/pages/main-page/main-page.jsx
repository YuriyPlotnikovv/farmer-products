import advantages from '/src/mocks/advantages';
import About from "/src/components/blocks/about/about";
import Advantages from "/src/components/blocks/advantages/advantages";
import { MainStyled } from './style';

export default function MainPage() {
  return (
    <MainStyled>
      <About />
      <Advantages advantages={advantages} />
    </MainStyled>
  );
}
