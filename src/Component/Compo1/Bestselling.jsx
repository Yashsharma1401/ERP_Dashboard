import React from "react";
import "./BestSelling.css";

const products = [
  {
    name: "Admas Airpod x-Zon",
    price: "$289.50",
    id: "A3652",
    stock: "Stock",
    image: "airpod.png",
  },
  {
    name: "Smart Watch F8 Pro",
    price: "$189.50",
    id: "A3653",
    stock: "Stock",
    image: "watch.png",
  },
  {
    name: "Nord Fold ZL",
    price: "$280.50",
    id: "A3654",
    stock: "Stock",
    image: "phone.png",
  },
  {
    name: "Wall Clock Cimbina",
    price: "$389.50",
    id: "A3655",
    stock: "Stock",
    image: "clock.png",
  },
  {
    name: "Galaxo T6 Munsun",
    price: "$289.50",
    id: "A3656",
    stock: "Stock",
    image: "phone2.png",
  },
  {
    name: "Laptop Macos Pro",
    price: "$489.50",
    id: "A3657",
    stock: "Stock",
    image: "laptop.png",
  },
];

const BestSellingProducts = () => {
  return (
    <div className="products-container">
      <h5 className="products-title">Best Selling Products</h5>
      <ul className="products-list">
        {products.map((product, index) => (
          <li key={index} className="product-item">
            <img src={product.image} alt={product.name} className="product-img" />
            <div className="product-details">
              <strong>{product.name}</strong>
              <span className="product-id">ID: {product.id}</span>
            </div>
            <div className="product-price">{product.price}</div>
            <div className="product-stock">{product.stock}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestSellingProducts;
