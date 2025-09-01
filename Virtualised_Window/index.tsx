import React, { useEffect, useState } from "react";
import { Virtuoso } from "react-virtuoso";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  // Fetch data on mount
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products?limit=400");
      const data = await res.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  return (
    <div style={{ height: "600px", width: "400px", border: "1px solid #ccc" }}>
      {products.length > 0 ? (
        <Virtuoso
          data={products}
          itemContent={(index, product) => (
            <div
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                width={50}
                height={50}
                style={{ objectFit: "cover", borderRadius: "6px" }}
              />
              <div>
                <h4 style={{ margin: 0 }}>{product.title}</h4>
                <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>
                  ${product.price}
                </p>
              </div>
            </div>
          )}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
