import React from "react";
import {useEffect} from "react";
import {setProducts} from "@/redux/products/ProductsSlice";
import {useDispatch} from "react-redux";

const Data = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(setProducts(data));
      });
  }, []);
  return ;
};

export default Data;
