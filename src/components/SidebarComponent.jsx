import React from 'react';
import '../styles/SidebarStyle.css';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';
import ModoClaro from '../icons/logoUSO.png';
import user from '../icons/user.png';

function SidebarComponent() {
  return (
    <div className="SidebarComponent open">
      <div className="Header">
        <div className="menu-btn">
          <i className="bx bx-chevron-left"></i>
        </div>
        <div className="brand">
          <img src={ModoClaro} alt="logo" />
          <span>Admin</span>
        </div>
      </div>

      <div className="MenuContainer">
        <div className="search">
          <i className="bx bx-search"></i>
          <input type="search" placeholder="Search" />
        </div>

        <ul className="menu">
          <li className="menu-item menu-item-static active">
            <Link to="/" className="menu-link">
              <i className="bx bx-home-alt-2"></i>
              <span>Home</span>
            </Link>
          </li>

          <li className="menu-item menu-item-static">
            <Link to="/Dashboard" className="menu-link">
              <i className="bx bx-bar-chart-alt-2"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <li className="menu-item menu-item-dropdown">
            <div className="menu-link">
              <i class='bx bx-user' ></i>
              <span>Users</span>
              <i className="bx bx-chevron-down"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <Link className="Sub-menu-link">My Profile</Link>
              </li>
              <li>
                <Link className="Sub-menu-link">Create a new user</Link>
              </li>
              <li>
                <Link className="Sub-menu-link">Roles & permission</Link>
              </li>
            </ul>
          </li>

          <li className="menu-item menu-item-static">
            <Link to="/Dashboard" className="menu-link">
              <i className="bx bx-file-blank"></i>
              <span>File</span>
            </Link>
          </li>

          <li className="menu-item menu-item-dropdown">
            <div className="menu-link">
              <i className="bx bx-task"></i>
              <span>Task</span>
              <i className="bx bx-chevron-down"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <Link className="Sub-menu-link">In progress</Link>
              </li>
              <li>
                <Link className="Sub-menu-link">Done</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="footer">
        <ul className="menu">
          <li className="menu-item menu-item-static">
            <Link to="/" className="menu-link">
              <i className="bx bx-bell"></i>
              <span>Notifications</span>
            </Link>
          </li>

          <li className="menu-item menu-item-static">
            <Link to="/Dashboard" className="menu-link">
              <i className="bx bx-cog"></i>
              <span>Setting</span>
            </Link>
          </li>
        </ul>

        <div className="user">
          <div className="user-img">
            <img src={user} alt="" />
          </div>
          <div className="user-data">
            <span className="name">Jonathan</span>
            <span className="email">hola@uso.com</span>
          </div>

          <div className="user-icon">
            <i className="bx bx-exit"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarComponent;