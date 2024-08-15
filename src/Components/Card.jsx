import React from "react";
import PropTypes from "prop-types";

const Card = ({product}) => {
    const {Product_Name, Product_Image, Description, Price, Category, Ratings, Product_Creation_date} = product;
  return (
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Product_Name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
  );
};

Card.propTypes = {};

export default Card;
