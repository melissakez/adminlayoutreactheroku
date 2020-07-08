import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-menu sticky-sidebar-menu">
        <div className="logo">
          <h1>
            <Link to="/">Collective</Link>
          </h1>
        </div>
        <div className="logo-icon text-center">
          <Link to="/">
            <img src="assets/images/logo.png" alt="logo-icon" />
          </Link>
        </div>
        <div className="sidebar-menu-inner">
          <ul className="nav nav-pills nav-stacked custom-nav">
            <li className="active">
              <Link to="/">
                <i className="fa fa-tachometer" />
                <span> Dashboard</span>
              </Link>
            </li>
            <li className="menu-list">
              <a href="#">
                <i className="fa fa-cogs" />
                <span>
                  Elements <i className="lnr lnr-chevron-right" />
                </span>
              </a>
              <ul className="sub-menu-list">
                <li>
                <Link to="/Carousels">
                <a>Carousels</a>
                </Link>
                </li>
                <li>
                <Link to="/Cards">
                <a>Default Cards</a>
                </Link>
                </li>
                <li>
                <Link to="/People">
                <a>People cards</a>
                </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/pricing">
                <i className="fa fa-table" /> <span>Pricing tables</span>
              </Link>
            </li>
            <li>
            <Link to="/Contblock">
            <i className="fa fa-th" /> <span>Content blocks</span>
              </Link>
            </li>
            <li>
            <Link to="/Form">
            <i className="fa fa-file-text" /> <span>Form</span>
              </Link>
            </li>
          </ul>
          <a className="toggle-btn">
            <i className="fa fa-angle-double-left menu-collapsed__left">
              <span>Collapse Sidebar</span>
            </i>
            <i className="fa fa-angle-double-right menu-collapsed__right" />
          </a>
        </div>
      </div>
    );
  }
}

export default Sidebar;
