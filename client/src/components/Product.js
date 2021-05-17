import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="col-md-3 m-3 card p-2">
        <img src={product.image} alt="" className="img-fluid" />
        <h1>{product.name}</h1>
        <h1>Rating : {product.rating}</h1>
        <h1>Price : {product.price}</h1>
    </div>
  );
};

export default Product;
