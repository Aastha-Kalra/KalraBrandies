import Product from "./ShoppingCart/product";
import MyBag from "./ShoppingCart/MyBag";
import Nav from "./ShoppingCart/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />
          <Nav />
          <Routes>
            <Route path="/" element={<Product />} />
            <Route path="/cart" element={<MyBag />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
