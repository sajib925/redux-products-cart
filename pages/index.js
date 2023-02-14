import AllProducts from "@/components/allProducts/AllProducts";
import Header from "@/components/Header/Header";
import Data from "@/data/data";

const Home = () => {
 
  return (
    <>
      <Data />
      <Header />
      <AllProducts />
    </>
  );
};

export default Home;
