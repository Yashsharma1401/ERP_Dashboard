import React from "react";
import "./Sidebar.css";
import { 
  FaThLarge, FaEnvelope, FaList, FaProjectDiagram, FaChartBar, FaShoppingCart, 
  FaLayerGroup, FaWpforms, FaFileAlt, FaLock, FaBell, FaCog, FaAngleRight, FaTimes 
} from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [openSubMenus, setOpenSubMenus] = React.useState({});

  const toggleSubMenu = (name) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const menuItems = [
    { name: "Dashboard", icon: <FaThLarge /> },
    { name: "Apps", icon: <FaLayerGroup />, subItems: ["Calendar", "To-Do List", "Messaging"] },
    { name: "Email", icon: <FaEnvelope />, subItems: ["Inbox", "Sent", "Drafts"] },
    { name: "Contact List", icon: <FaList />, subItems: ["Friends", "Work", "Family"] },
    { name: "Projects", icon: <FaProjectDiagram />, subItems: ["Ongoing", "Completed"] },
    { name: "Analytics", icon: <FaChartBar />, subItems: ["Traffic", "Sales", "Performance"] },
    { name: "eCommerce", icon: <FaShoppingCart />, subItems: ["Products", "Orders", "Customers"] },
    { name: "UI Elements", icon: <FaLayerGroup />, subItems: ["Buttons", "Cards", "Modals"] },
    { name: "Forms", icon: <FaWpforms />, subItems: ["Login Form", "Registration Form"] },
    { name: "Pages", icon: <FaFileAlt />, subItems: ["About", "Contact"] },
    { name: "Authentication", icon: <FaLock />, subItems: ["Login", "Register"] },
    { name: "Notification", icon: <FaBell /> },
    { name: "Settings", icon: <FaCog /> },
  ];

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <div className="logo">🟣 Admash</div>
        <FaTimes className="close-btn" onClick={toggleSidebar} />
      </div>

      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className={`menu-container ${openSubMenus[item.name] ? "open" : ""}`}>
            <div 
              className="menu-item" 
              onClick={item.subItems ? () => toggleSubMenu(item.name) : undefined}
            >
              <span className="icon">{item.icon}</span>
              <span className="menu-text">{item.name}</span>
              {item.subItems && (
                <FaAngleRight className={`dropdown-icon ${openSubMenus[item.name] ? "open" : ""}`} />
              )}
            </div>
            
            {item.subItems && (
              <ul className={`submenu ${openSubMenus[item.name] ? "show" : ""}`}>
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex} className="submenu-item">{subItem}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
