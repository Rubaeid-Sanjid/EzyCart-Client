import React from "react";
import PropTypes from "prop-types";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Card = ({ product }) => {
  const {
    Product_Name,
    Product_Image,
    Brand_Name,
    Description,
    Price,
    Category,
    Ratings,
    Product_Creation_date,
  } = product;

  const date = new Date(Product_Creation_date);
  const localTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const dateTime = Product_Creation_date.split("T")[0] + ", " + localTime;
  return (
    <div className="card card-compact bg-base-100 shadow-xl h-full">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body flex flex-col justify-between">
        <div>
          <div className="flex gap-3 items-center">
            <h2 className="card-title">{Product_Name}</h2>
            <Rating style={{ maxWidth: 120 }} value={Ratings} readOnly />
          </div>
          <h3 className="font-medium text-neutral-400 mb-2">{dateTime}</h3>
          <h3 className="text-lg border-t-2 py-2">
            <span className="font-semibold">Brand Name:</span> {Brand_Name}
          </h3>
          <h5 className="text-lg">{Description}</h5>
          <div className="card-actions my-5">
            <div className="badge badge-outline">{Category}</div>
          </div>
        </div>
        <div className="card-actions justify-between items-center mt-auto">
          <h3 className="text-2xl font-semibold text-orange-500">$ {Price}</h3>
          <button className="btn bg-orange-500 text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
