import { useState } from "react";

const ProductForm = ({ handleProducts }) => {
  const [error, setError] = useState("");

  const handleProductData = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    // console.log(name, price, quantity);

    if (name.length === 0) {
      setError("Please add your name");
      return;
    } else if (price.length <= 0) {
      setError("Please add price");
      return;
    } else if (quantity <= 0) {
      setError("Please add quantity");
      return;
    } else {
      setError("");
    }

    const products = {
      name,
      price,
      quantity,
    };
    handleProducts(products);
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
      <p>{error}</p>
    </div>
  );
};

export default ProductForm;
