import Footer from "../../layout/footer/footer";
import Header from "../../layout/header/header";
import MainPage from "../../pages/main-page/main-page";

export default function PageWrapper({ ...prop }) {
  return (
    <>
      <Header />
      <MainPage {...prop} />
      <Footer />
    </>
  );
}
