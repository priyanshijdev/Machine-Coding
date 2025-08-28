import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=400");
    const data = await res.json();
    setProducts(data.products);
    console.log(products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="products">
        {products.map((ele) => (
          <div className="products__single" key={ele.id}>
            <img src={ele.thumbnail} alt={ele.title} />
            <span>{ele.title} </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
