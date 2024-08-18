import { useState } from "react";
import { useEffect } from "react";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchText, setSearchText] = useState("");

  // For filtering
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const [sortBy, setSortBy] = useState("");

  const numberOfItemsPerPage = 6;

  const totalNumberOfPages = Math.ceil(totalProducts / numberOfItemsPerPage);

  const pages = [];
  for (let i = 1; i <= totalNumberOfPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    const priceSplit = priceRange.split("-");
    const minPrice = priceSplit[0];
    const maxPrice = priceSplit[1];

    fetch(
      `http://localhost:5000/products?page=${
        currentPage - 1
      }&items=${numberOfItemsPerPage}&search=${searchText}&brand=${brand}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&sortBy=${sortBy}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotalProducts(data.totalProducts);
      });
  }, [
    currentPage,
    numberOfItemsPerPage,
    searchText,
    brand,
    category,
    priceRange,
    sortBy,
  ]);

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
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto px-3 md:px-6 lg:px-12">
        {/* Search section */}
        <div className="my-8">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full max-w-xs"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
                setCurrentPage(1);
              }}
            />
            {/* <button className="btn bg-orange-500 text-white">Search</button> */}
          </div>
        </div>

        {/* Filter section */}
        <div className="my-8 flex gap-6 flex-col lg:flex-row">
          {/* brand options */}
          <select
            className="select select-bordered w-full max-w-xs"
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">Select Brand Name</option>
            {[...new Set(products.map((product) => product.Brand_Name))].map(
              (brand, index) => (
                <option key={index} value={brand}>
                  {brand}
                </option>
              )
            )}
          </select>

          {/*category options */}
          <select
            className="select select-bordered w-full max-w-xs"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">Select Category</option>
            {[...new Set(products.map((product) => product.Category))].map(
              (category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              )
            )}
          </select>

          {/* Price range options */}
          <select
            className="select select-bordered w-full max-w-xs"
            value={priceRange}
            onChange={(e) => {
              setPriceRange(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">Price Range</option>
            <option value="0-50">0-50</option>
            <option value="51-100">51-100</option>
            <option value="101-200">101-200</option>
            <option value="201-500">201-500</option>
            <option value="500+">500+</option>
          </select>

          {/* Sorting options */}
          <select
            className="select select-bordered w-full max-w-xs"
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">Sort By</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="newestFirst">Date Added: Newest First</option>
          </select>
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
    </div>
  );
};

export default Main;
