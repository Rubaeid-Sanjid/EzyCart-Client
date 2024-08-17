import { useState } from "react";
import { useEffect } from "react";
import Card from "../Components/Card";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  const [currentPage, setCurrentPage] = useState(1);

  const numberOfItemsPerPage = 6;

  const totalNumberOfPages = Math.ceil(totalProducts / numberOfItemsPerPage);

  const pages = [];
  for (let i = 1; i <= totalNumberOfPages; i++) {
    pages.push(i);
  }
  console.log(pages);

  useEffect(() => {
    fetch(
      `http://localhost:5000/products?page=${
        currentPage - 1
      }&items=${numberOfItemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotalProducts(data.totalProducts);
      });
  }, [currentPage, numberOfItemsPerPage]);

  const handlePrevBtn = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextBtn = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="container mx-auto px-3 md:px-6 lg:px-12">
      <h1 className="text-3xl font-bold text-blue-600 my-8">EzyCart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Card key={index} product={product}></Card>
        ))}
      </div>

      <div className="text-center my-8">
        <button className="btn" onClick={handlePrevBtn}>
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`${currentPage === page && "bg-orange-500"} btn mx-1`}
          >
            {page}
          </button>
        ))}
        <button className="btn" onClick={handleNextBtn}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Main;
