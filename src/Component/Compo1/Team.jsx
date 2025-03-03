import React from "react";
import { FaPencilAlt, FaShieldAlt, FaUserShield } from "react-icons/fa";
import "./Team.css";

const teamMembers = [
  {
    name: "Dan Brian",
    username: "@danbrian",
    email: "danbrian@admash.com",
    role: "Editor",
    status: "Active",
    image: "danbrian.png",
  },
  {
    name: "Francis Frank",
    username: "@ffrank7e",
    email: "frank43@admash.com",
    role: "Maintainer",
    status: "Inactive",
    image: "francisfrank.png",
  },
  {
    name: "Gilbert",
    username: "@gilbert",
    email: "gilbert@admash.com",
    role: "Editor",
    status: "Active",
    image: "gilbert.png",
  },
  {
    name: "Jordan Stevenson",
    username: "@jstevenson5c",
    email: "jordansteven@admash.com",
    role: "Admin",
    status: "Active",
    image: "jordan.png",
  },
  {
    name: "Jorge",
    username: "@jorge",
    email: "jorge@admash.com",
    role: "Editor",
    status: "Active",
    image: "jorge.png",
  },
];

const TeamMembers = () => {
  return (
    <div className="team-container">
      <h5 className="table-title">Team Members List</h5>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member, index) => (
              <tr key={index}>
                <td>
                  <img src={member.image} alt={member.name} className="profile-img" />
                  <div className="user-info">
                    <strong>{member.name}</strong>
                    <br />
                    <span className="username">{member.username}</span>
                  </div>
                </td>
                <td>{member.email}</td>
                <td>
                  {member.role === "Editor" && <FaPencilAlt className="role-icon" />}
                  {member.role === "Maintainer" && <FaShieldAlt className="role-icon" />}
                  {member.role === "Admin" && <FaUserShield className="role-icon" />}
                  {member.role}
                </td>
                <td>
                  <span className={`status ${member.status.toLowerCase()}`}>
                    {member.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamMembers;
