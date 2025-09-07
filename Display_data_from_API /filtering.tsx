import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  // 'https://dummyjson.com/products'

  const fetchData = async () => {
    const data = await axios("https://dummyjson.com/products");
    const response = data.data.products;
    console.log("response", data.data.products);
    setProducts(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {/* {products.filter((item) => (
        (item.id>9)
        <span>{item.title} </span>
      )) } */}

      {
        products
          .filter((item) => item.id > 9)
          .map((i) => (
            <span>{i.title} </span>
          ))
        // return filterProd;
      }
      {/* return filterProd; */}
    </div>
  );
}
