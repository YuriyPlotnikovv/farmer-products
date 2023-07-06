import advantagesList from '../../mocks/advantages';
import productsList from '../../mocks/products';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import { GlobalStyle } from './style';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper className='page-wrapper' products={productsList} />
    </>
  );
}
