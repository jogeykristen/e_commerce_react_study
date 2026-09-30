import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard(props) {
  const { cartCount, setCartCount } = useContext(CartContext);

  return (
    <div>
      <Link to={`/products/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>

      <button onClick={() => setCartCount(cartCount + 1)}>Add To Cart</button>
    </div>
  );
}

export default ProductCard;
