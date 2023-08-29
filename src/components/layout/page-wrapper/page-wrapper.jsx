import Footer from '/src/components/layout/footer/footer';
import Header from '/src/components/layout/header/header';
import { Outlet } from 'react-router-dom';

export default function PageWrapper({ ...prop }) {
  return (
    <>
      <Header />
        <Outlet {...prop} />
      <Footer />
    </>
  );
}
