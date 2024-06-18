import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminNavBar.css";

const AdminNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate()

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    const logoutClick = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('isAdmin')
        navigate('/')
    }
  return (
    <div>
      <header className="navbar p-4">
      <a href="#" id='title'>CineCritique <span className="admin-text">Admin</span></a>
      <button className="toggle-button" onClick={toggleMenu}>
          &#9776;
        </button>
        <nav className="links">
          <ul className={menuOpen ? "show" : ""}>
            <li>
              <Link to="/admin" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/admin/addMovie" className="link">
                Add Movie
              </Link>
            </li>
            <li>
              <Link to="/admin/userManage" className="link">
              Manage Users
              </Link>
            </li>
            <li>
              {/* <Link to="/trending" className="link">
                Trending
              </Link>
            </li>
            <li>
              <Link to="#" className="link">
                Categories
              </Link> */}
            </li>
          </ul>
        </nav>
        <span>
          <button className="logout-link" onClick={logoutClick}>Log Out</button>
        </span>
      </header>
    </div>
  );
};

export default AdminNavbar;
