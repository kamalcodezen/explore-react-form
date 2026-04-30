import { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagement = () => {
  const [products, setNewProducts] = useState([]);

  const handleProducts = (newProducts) => {
    setNewProducts([...products, newProducts]);
  };

  return (
    <div>
      <ProductForm handleProducts={handleProducts}></ProductForm>
      <ProductTable products={products}></ProductTable>
    </div>
  );
};

export default ProductManagement;
