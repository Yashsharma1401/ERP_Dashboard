import React from "react";
import { FaChartPie, FaBriefcase, FaUsers } from "react-icons/fa";
import "./compo.css";

const stats = [
  {
    title: "Total Sales",
    value: "$25,890",
    icon: <FaChartPie className="icon" />, 
    change: "1.3% Up from past week",
    positive: true,
  },
  {
    title: "Total Orders",
    value: "$25,890",
    icon: <FaBriefcase className="icon" />, 
    change: "1.5% Up from past week",
    positive: true,
  },
  {
    title: "Total Customers",
    value: "183.35M",
    icon: <FaUsers className="icon" />, 
    change: "1.6% Up from past week",
    positive: false,
  },
];

const StatsBox = () => {
  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-box">
          <div className="stat-header">
            <h3 className="stat-value">{stat.value}</h3>
            <div className="stat-icon">{stat.icon}</div>
          </div>
          <p className="stat-title">{stat.title}</p>
          <p className={`stat-change ${stat.positive ? "positive" : "negative"}`}>{stat.change}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsBox;
