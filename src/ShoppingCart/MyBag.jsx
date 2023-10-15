import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { remove, increase , decrease, clearCart} from "../store/cartSlice";
const MyBag = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (product) => {
    dispatch(remove(product));
    console.log(product);
  };

  const handleIncrease = (product) => {
    dispatch(increase(product));
    console.log(product);
  };
  const handledecrease = (product) => {
    dispatch(decrease(product));
    console.log(product);
  };

  const handleClear=(product)=>{
    dispatch(clearCart(product))
  }

  return (
    <div>
      <h1 className="text-purple-800 text-xl flex  justify-center items-center p-4 animate-pulse">
        My bag
      </h1>

      <div>
        {products.cartItems.length === 0 ? (
          <>
            <div className="flex justify-center items-center flex-col my-10">
              <h1 className="text-4xl">Your bag is empty now</h1>

              <Link to={"/"}>
                <button className="bg-purple-600 px-6 py-2 text-white my-8 rounded">Start Shopping</button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="bg-purple-200 w-full h-full flex flex-col gap-10 shadow-md p-5">
              {products.cartItems.map((product) => {
                return (
                  <div className="bg-purple-500 shadow-md w-full h-full text-white flex  justify-center items-center gap-10 px-10 md:flex-row flex-col py-4">
                    <div className="w-full flex items-center justify-center h-full">
                      <img src={product.image} alt="" className="h-44 w-44 " />
                    </div>

                    <div className="w-full h-full flex justify-center items-center flex-col ">
                      <p className="text-sky-300">Item</p>
                      <p className="text-center">{product.title}</p>
                    </div>

                    <div className="w-full h-full flex justify-center items-center flex-col">
                      <p className="text-sky-300">Quantity</p>
                      <div className="flex gap-4">
                        <button onClick={() => handledecrease(product)}>-</button>
                        <p className="font-semibold">{product.cartQuantity}</p>
                        <button   onClick={() => handleIncrease(product)}>+</button>
                      </div>
                    </div>

                    <div className="w-full h-full flex justify-center items-center flex-col">
                      <p className="text-sky-300">Price</p>
                      <p className="font-semibold">${product.price}</p>
                    </div>

                    <div className="w-full h-full flex justify-center items-center flex-col">
                      <p className="text-sky-300">Total</p>
                      <p className="font-semibold">
                        ${product.price * product.cartQuantity}
                      </p>
                    </div>

                    <button
                      className="px-10 bg-red-600 py-2 hover:bg-black rounded-xl"
                      onClick={() => handleRemove(product)}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}

              <div>
                <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-purple-600" onClick={()=>handleClear()}>
                  Clear Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyBag;
