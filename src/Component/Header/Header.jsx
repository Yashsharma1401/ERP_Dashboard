import React, { useState, useEffect } from "react";
import { FaBars, FaSearch, FaEnvelope, FaBell } from "react-icons/fa";
import "./Header.css";
import profilePic from "../assets/profile.jpg"; 

export const Header = ({ toggleSidebar, isSidebarOpen }) => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const today = new Date();
      setCurrentDate(
        window.innerWidth <= 768
          ? today.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "2-digit" })
          : today.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })
      );
    };

    updateDate();
    window.addEventListener("resize", updateDate);
    return () => window.removeEventListener("resize", updateDate);
  }, []);

  return (
    <nav className={`navbar navbar-light bg-white shadow-sm px-3 d-flex justify-content-between align-items-center header ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      {/* Left Section */}
      <div className="d-flex align-items-center">
        <FaBars
          size={18}
          className="me-2"
          onClick={toggleSidebar}  
          style={{ cursor: "pointer" }}
          aria-label="Toggle Sidebar"
        />
        <div className="d-flex align-items-center bg-light search-bar rounded-pill">
          <input type="text" placeholder="Search..." className="form-control border-0 bg-transparent me-2" />
          <button className="btn p-0 search-btn">
            <FaSearch size={19} />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="d-flex align-items-center gap-3">
        <span className="calendar">{currentDate}</span>
        <FaEnvelope size={22} className="text-secondary" />
        <FaBell size={22} className="text-muted" />
        <img src={profilePic} alt="User" className="rounded-circle profile-pic" />
      </div>
    </nav>
  );
};

export default Header;
