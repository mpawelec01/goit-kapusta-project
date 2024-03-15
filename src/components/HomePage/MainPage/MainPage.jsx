import Balance from "../Balance/Balance";
import BalanceModal from "../BalanceModal/BalanceModal";
import MobileHome from "../MobileHome/MobileHome";
import Navigation from "../Navigation/Navigation";
import ReportsLink from "../ReportsLink/ReportsLink";
import Today from "../../Today/Today";
import ProductForm from "../ProductForm/ProductForm";

const MainPage = () => {
  return (
    <>
      <MobileHome />
      <ReportsLink />
      <Balance />
      <Navigation />
      {/* <Today /> */}
      <ProductForm />
    </>
  );
};

export default MainPage;
