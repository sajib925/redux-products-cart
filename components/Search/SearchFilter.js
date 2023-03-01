import { itemsFiltered } from "@/redux/products/ProductsSlice";
import React from "react";
import {useDispatch} from "react-redux";

const SearchFilter = () => {
  const dispatch = useDispatch();
  const filterProduct = (e) => {
    dispatch(itemsFiltered(e.target.value));
  };
  return (
    <>
      <input
        type="text"
        name=""
        className="w-[100%] p-2 outline-none border-2 border-gray-300 rounded-xl"
        placeholder="Search product by title"
        onChange={filterProduct}
      />
    </>
  );
};

export default SearchFilter;
