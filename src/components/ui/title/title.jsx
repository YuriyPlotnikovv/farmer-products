import { TitleStyled } from './style';

export const TitleSize = {
  BIG: 'big',
  MEDIUM: 'medium',
  SMALL: 'small',
  EXTRA_SMALL: 'extra_small',
};

export const TitleLevel = {
  H1: '1',
  H2: '2',
  H3: '3',
  H4: '4',
  H5: '5',
  H6: '6',
};

export default function Title({ children, size, level }) {
  return (
    <TitleStyled as={`h${level}`} $size={size}>
      {children}
    </TitleStyled>
  );
}
