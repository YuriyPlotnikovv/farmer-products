import Footer from '../../layout/footer/footer';
import Header from '../../layout/header/header';
import MainPage from '../../pages/main-page/main-page';
import BuyPage from '../../pages/buy-page/buy-page';

export default function PageWrapper({ ...prop }) {
  return (
    <>
      <Header />
      <BuyPage {...prop} />
      <Footer />
    </>
  );
}
