import Hero from "../components/Hero";
import CategoriesList from "../components/CategoriesList";
import BestSellingProducts from "../components/BestSellingProducts";
import SaleProduct from "../components/SaleProduct";
import ExploreProductSection from "../components/ExploreProductSection";
import CompanyFeatures from "../components/CompanyFeatures";
const HomePage = () => {
  return (
    <div className=" mx-auto max-w-screen-xl">
      <Hero />
      <CategoriesList />
      <BestSellingProducts />
      <SaleProduct />
      <ExploreProductSection />
      <CompanyFeatures />
    </div>
  );
};

export default HomePage;
