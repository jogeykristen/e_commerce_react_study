import { useSelector } from "react-redux";

function Navbar() {
  const items = useSelector((state) => state.cart.items);

  return (
    <nav>
      <h2>E-Commerce App</h2>

      <h3>Cart: {items.length}</h3>
    </nav>
  );
}

export default Navbar;
