import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.css";
import logo from './logo.png';

class Navbar extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  state = {};

  getNavLinkClass = path => {
    return this.props.location.pathname === path
      ? "nav-item active"
      : "nav-item";
  };
  render() {
    var isLogin = true;
    if (isLogin){
      return (
        <nav className="menu navbar navbar-expand navbar-dark">
          <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="menu__logo"/>
          </Link>
          <button className="navbar-toggler" type="button"
            data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="menu__right" id="navbarNav">
            <ul className="navbar-nav">
              <li className={this.getNavLinkClass("/")} >
                <Link className="menu__list-item nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className={this.getNavLinkClass("/myUploads")} >
                <Link className="menu__list-item nav-link" to="/myUploads">
                  My Uploads
                </Link>
              </li>
              <li className={this.getNavLinkClass('/myNode' )} >
                <Link className="menu__list-item nav-link" to="/myNode">
                  My node
                </Link>
              </li>
              <li className={this.getNavLinkClass('/aboutUs' )} >
                <Link className="menu__list-item nav-link" to="/aboutUs">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
    else{
      return (
        <nav className="menu navbar navbar-expand navbar-dark">
          <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="menu__logo"/>
          </Link>
          <button className="navbar-toggler" type="button"
            data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="menu__right" id="navbarNav">
            <ul className="navbar-nav">
              <li className={this.getNavLinkClass("/")} >
                <Link className="menu__list-item nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className={this.getNavLinkClass("/aboutUs")} >
                <Link className="menu__list-item nav-link" to="/aboutUs">
                  About
                </Link>
              </li>
              <li className={this.getNavLinkClass("/myUploads")} >
                <Link className="menu__list-item nav-link" to="/myUploads">
                  Create Account
                </Link>
              </li>
              <li className={this.getNavLinkClass('/myNode' )} >
                <Link className="menu__list-item nav-link" to="/myNode">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  }
}

export default withRouter(Navbar);
