import { useState } from "react";
import { useEffect } from "react";
import Card from "../Components/Card";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchText, setSearchText] = useState("");

  const numberOfItemsPerPage = 6;

  const totalNumberOfPages = Math.ceil(totalProducts / numberOfItemsPerPage);

  const pages = [];
  for (let i = 1; i <= totalNumberOfPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    fetch(
      `http://localhost:5000/products?page=${
        currentPage - 1
      }&items=${numberOfItemsPerPage}&search=${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotalProducts(data.totalProducts);
      });
  }, [currentPage, numberOfItemsPerPage, searchText]);

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
      <h1 className="text-3xl font-bold text-orange-500 my-8">EzyCart</h1>

      {/* Filtering section */}
      <div className="my-8">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-warning w-full max-w-xs"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setCurrentPage(1);
            }}
          />
          {/* <button className="btn bg-orange-500 text-white">Search</button> */}
        </div>
      </div>

      {/* Card section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Card key={index} product={product}></Card>
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="text-center my-8">
        <button
          className="btn"
          onClick={handlePrevBtn}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`${
              currentPage === page && "bg-orange-500 text-white"
            } btn mx-1`}
          >
            {page}
          </button>
        ))}
        <button
          className="btn"
          disabled={currentPage === pages.length}
          onClick={handleNextBtn}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Main;
