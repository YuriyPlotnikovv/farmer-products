import PageWrapper from '/src/components/layout/page-wrapper/page-wrapper';
import { GlobalStyle } from './style';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '/src/components/pages/main-page/main-page';
import BuyPage from '/src/components/pages/buy-page/buy-page';
import ScrollToTop from '/src//scroll-to-top';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<PageWrapper />} >
            <Route index element={<MainPage />} />
            <Route path='catalog' element={<BuyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
