import logo from '../../../assets/logo.svg';
import { LogoStyled } from './style';

export default function Logo() {
  return (
    <>
      <LogoStyled href='/'>
        <img src={logo} alt='Фермерские продукты' />
      </LogoStyled>
    </>
  );
}
