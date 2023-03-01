import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addItem} from "@/redux/cart/cartSlice";
import {useQuery} from "react-query";
import {getAllProducts} from "./../../getAPI/ProductsAPI";
import {setProducts} from "@/redux/products/ProductsSlice";

const AllProducts = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products.allProducts);
  const productsQuery = useQuery({
    queryKey: "product",
    queryFn: getAllProducts,
    onSuccess: (data) => dispatch(setProducts(data)),
  });
console.log(data);
  return (
    <>
      <section className="max-w-7xl mx-auto">
        <h1 className="text-center text-7xl font-bold mb-10">All Products</h1>
        <div className="flex flex-wrap justify-center items-center gap-5">
          {data?.map((product) => (
            <div
              className="max-w-sm w-[350] sm:w-384 rounded overflow-hidden shadow-lg"
              key={product.id}
            >
              <img className="" src={product.images[0]} alt={product.title} />
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">{product.title}</h3>
                <h4 className="font-bold text-xl mb-2">
                  Price : {product.price}
                </h4>

                <p className="text-gray-700 text-base">{product.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={() => dispatch(addItem(product))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllProducts;
