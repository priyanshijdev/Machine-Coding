import { useState, useEffect } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  const PAGE_SIZE = 10;

  const fetchData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=400");
    const data = await res.json();
    setProducts(data.products);
    console.log(products);
  };

  const totalPages = products.length; // used to give upper value
  const noOfPage = Math.ceil(totalPages / PAGE_SIZE);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="products">
        {products.slice(0, 10).map((ele) => (
          <div className="products__single" key={ele.id}>
            <img src={ele.thumbnail} alt={ele.title} />
            <span>{ele.title} </span>
          </div>
        ))}
      </div>
      <div>
        {[...Array(10).keys()].map((n) => (
          <span key={n} className="pageNo">
            {n}{" "}
          </span>
        ))}
      </div>
    </>
  );
};

export default App;
