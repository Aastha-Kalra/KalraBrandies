import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className="md:px-10 md:py-5 py-5 flex justify-around shadow-md sticky top-0 bg-white text-xl ">
  <h1 className="font-bold text-purple-600 animate-bounce">Kalra's Brandies</h1>
      <div className="flex justify-end gap-24">
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          My Bag: &nbsp;
          <span>{items.cartItems.length}</span>
        </Link>
      </div>
    </div>
  );
};
export default Nav;
