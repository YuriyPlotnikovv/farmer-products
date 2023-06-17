import About from "../../blocks/about/about";
import Advantages from "../../blocks/advantages/advantages";
import { MainStyled } from './style';

export default function MainPage({ advantages }) {
  return (
    <MainStyled>
      <About />
      <Advantages advantages={advantages} />
    </MainStyled>
  );
}
