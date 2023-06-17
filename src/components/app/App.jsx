import advantagesList from "../../mocks/advantages";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import { GlobalStyle } from "./style";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper className="page-wrapper" advantages={advantagesList} />
    </>
  );
}
