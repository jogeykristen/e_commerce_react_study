import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

function Products() {
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      title: "Laptop",
    },
    {
      id: 2,
      title: "Phone",
    },
    {
      id: 3,
      title: "Tablet",
    },
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>

          <button onClick={() => dispatch(addToCart(product))}>
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
