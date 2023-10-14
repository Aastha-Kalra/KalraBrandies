import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className="p-10 flex justify-around shadow-md sticky top-0 bg-white">
      Kalra's Emporium
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
