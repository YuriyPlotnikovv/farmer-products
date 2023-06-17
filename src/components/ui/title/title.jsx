import { TitleStyled } from './style';

export const TitleSize = {
  BIG: "big",
  MEDIUM: "medium",
  SMALL: "small",
  EXTRA_SMALL: "extra_small"
};

export default function Title({ children, size }) {
  return <TitleStyled className={`title${size ? ` title_${size}` : ""}`}>{children}</TitleStyled>;
}
