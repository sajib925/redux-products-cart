import React, {useState} from "react";
import {BsFillCartCheckFill} from "react-icons/bs";
import {useSelector} from "react-redux";
import Cart from "../Cart/Cart";
import SearchFilter from "../Search/SearchFilter";
import Footer from "./Footer";

const Header = () => {
  const [cartPopup, setCartPopup] = useState(false);
  const cartSate = useSelector((state) => state.cart);
  const handleCartPopup = () => {
    setCartPopup((cartPopup) => !cartPopup);
  };
  return (
    <header className="max-w-7xl mx-auto p-10 relative">
      <div className="flex flex-wrap justify-between items-center">
        <div className="text-xl font-medium">CART</div>
        <div className="relative" onClick={handleCartPopup}>
          <BsFillCartCheckFill size={30} />
          <div className="w-7 h-7 rounded-full bg-orange-700 flex justify-center items-center absolute -top-4 -left-3">
            {cartSate.items.length > 0 ? (
              cartSate.items.reduce(
                (total, {quantity}) => total + quantity,
                0
              )
            ) : (
              <span>0</span>
            )}
          </div>
        </div>
      </div>
      <div className="w-[100%] py-4">
        <SearchFilter />
      </div>
      <div
        className={
          cartPopup
            ? "visible fixed top-0 right-0"
            : "invisible fixed top-0 right-0"
        }
      >
        <Cart handleCartPopup={handleCartPopup} />
      </div>
      <Footer />
    </header>
  );
};

export default Header;
