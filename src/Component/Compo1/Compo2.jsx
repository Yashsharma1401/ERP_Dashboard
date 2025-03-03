import React from "react";
import "./Compo2.css"


const orders = [
  {
    id: "#SK258",
    product: { name: "Laptop Macos Pro", image: "laptop.png" },
    customer: "Colin Firth",
    price: "$289.50",
    vendor: "Boetic Fashion",
    date: "2021-12-19",
    status: "Pending",
    rating: "5.0 (61 votes)",
  },
  {
    id: "#SK259",
    product: { name: "Smart Camera XD6", image: "camera.png" },
    customer: "Wade Dave",
    price: "$189.50",
    vendor: "Aronic Conver",
    date: "2021-12-19",
    status: "Out of Stock",
    rating: "5.0 (61 votes)",
  },
  {
    id: "#SK260",
    product: { name: "Pixi 8 Wireless Airphone", image: "airphone.png" },
    customer: "Seth Riley",
    price: "$250.50",
    vendor: "Lotu Arnich",
    date: "2021-12-19",
    status: "Delivered",
    rating: "5.0 (61 votes)",
  },
];

const RecentOrders = () => {
  return (
    <div className="recent-orders-container">
      <h5 className="table-title">Recent Orders</h5>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Customer</th>
              <th>Price</th>
              <th>Vendor</th>
              <th>Date</th>
              <th>Status</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{order.id}</td>
                <td>
                  <img src={order.product.image} alt={order.product.name} className="product-img" />
                  {order.product.name}
                </td>
                <td>{order.customer}</td>
                <td>{order.price}</td>
                <td>{order.vendor}</td>
                <td>{order.date}</td>
                <td>
                  <span className={`status ${order.status.toLowerCase().replace(" ", "-")}`}>
                    {order.status}
                  </span>
                </td>
                <td>{order.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
