import { useState } from "react";

const ProductForm = () => {
  const handleProductData = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    // console.log(name, price, quantity);

    const product = {
      name,
      price,
      quantity,
    };
    console.log(product);
  };

  return (
    <div>
      <form onSubmit={handleProductData}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="number" name="price" placeholder="price" />
        <br />
        <input type="number" name="quantity" placeholder="quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ProductForm;
