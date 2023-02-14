import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {addItem, removeItem, resetCart} from "@/redux/cart/cartSlice";

const Cart = ({handleCartPopup}) => {
  const dispatch = useDispatch();
  const cartSate = useSelector((state) => state.cart);
  const handleResetCart = () => {
    // extra logic
    dispatch(resetCart());
  };
  console.log(cartSate)
  return (
    <div
      className="relative z-10"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      Cart (
                      {cartSate.items.reduce(
                        (total, cartItem) => total + cartItem.quantity,
                        0
                      )}
                      )
                    </h2>

                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                        onClick={handleCartPopup}
                      >
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <div className="flow-root">
                      <div
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {cartSate.items.length > 0 ? (
                          cartSate.items.map(
                            ({
                              id,
                              images,
                              title,
                              price,
                              quantity,
                              description,
                            }) => (
                              <div className="flex py-6" key={id}>
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={images[0]}
                                    alt={title}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href="#">{title}</a>
                                      </h3>
                                      <p className="ml-4">Price: {price}</p>
                                      <p className="ml-4">
                                        Quantity: {quantity}
                                      </p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {description}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <button
                                      type="button"
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                      onClick={() =>
                                        dispatch(
                                          addItem({
                                            id,
                                            images,
                                            price,
                                            title,
                                            quantity,
                                            description,
                                          })
                                        )
                                      }
                                    >
                                      Add
                                    </button>

                                    <button
                                      type="button"
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                      onClick={() =>
                                        dispatch(removeItem({id, quantity}))
                                      }
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )
                          )
                        ) : (
                          <p>Your cart is empty</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-2 pb-6 px-4 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Total</p>
                    <p><bdi>$</bdi>{" "}
                      {cartSate.items.reduce(
                        (total, cartItem) =>
                          total + cartItem.quantity * cartItem.price,
                        0
                      )}
                    </p>
                  </div>
                </div>
                <div className="py-6 px-4 sm:px-6 flex justify-between">
                  <button
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                    onClick={handleResetCart}
                  >
                    Reset
                  </button>
                  <button className="font-medium text-indigo-600 hover:text-indigo-500">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
