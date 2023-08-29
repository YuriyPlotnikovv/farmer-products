import logo from '/src/assets/logo.svg';
import { LogoStyled } from './style';

export default function Logo() {
  return (
    <>
      <LogoStyled to='/'>
        <img src={logo} alt='Фермерские продукты' />
      </LogoStyled>
    </>
  );
}
