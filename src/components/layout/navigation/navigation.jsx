import { useLocation } from 'react-router-dom';
import Button from "/src/components/ui/button/button";

const buttons = [
  {
    link: '/catalog',
    button: (
      <Button link='catalog'>Купить</Button>
    )
  },
  {
    link: '/',
    button: (
      <Button link='/'>О нас</Button>
    )
  }
];

export default function Navigation() {
  const pageUrl = useLocation().pathname;

  return (
    <nav>
      {buttons.filter((button) => button.link !== pageUrl).map((button) => button.button)}
    </nav>
  );
}
