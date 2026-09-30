import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);

        const response = await fetch(`https://fakestoreapi.com/products/${id}`);

        const data = await response.json();

        setProduct(data);
      } catch (err) {
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>{product.title}</h1>

      <img src={product.image} alt={product.title} width="200" />

      <h3>₹ {product.price}</h3>

      <p>{product.description}</p>

      <p>Category: {product.category}</p>
    </div>
  );
}

export default ProductDetails;
