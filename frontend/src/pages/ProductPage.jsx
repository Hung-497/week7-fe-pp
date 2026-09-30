import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>Error: {error}</p>
  ) : (
    product && (
      <div>
        <h2>Product Name: {product.productName}</h2>
        <p>Category: {product.category}</p>
        <p>Description: {product.description}</p>
        <p>Price: {product.price}</p>
        <p>Inventory count: {product.inventoryCount}</p>
        <p>Supplier name: {product.supplier.name}</p>
        <p>Supplier contact email: {product.supplier.contactEmail}</p>
        <p>Supplier contact phone: {product.supplier.contactPhone}</p>
        <p>Supplier verified: {product.supplier.isVerified ? "Yes" : "No"}</p>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    )
  );
};

export default ProductPage;