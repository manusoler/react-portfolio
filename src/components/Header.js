import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import classnames from "classnames";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      // Set initial state of the menu
      showMenu: false
    };
  }

  onClickMenu(evt) {
    // Select DOM items
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");
    const menuNav = document.querySelector(".menu-nav");
    const menuBranding = document.querySelector(".menu-branding");
    const navItems = document.querySelectorAll(".nav-item");
    const { showMenu } = this.state;

    menuBtn.classList[showMenu ? "remove" : "add"]("close");
    menu.classList[showMenu ? "remove" : "add"]("show");
    menuNav.classList[showMenu ? "remove" : "add"]("show");
    menuBranding.classList[showMenu ? "remove" : "add"]("show");
    navItems.forEach(item =>
      item.classList[showMenu ? "remove" : "add"]("show")
    );
    // Set menu state
    this.setState({ showMenu: !showMenu });
  }

  render() {
    const { menu } = this.props;
    let menuContent = null;
    if (menu) {
      menuContent = menu.map((item, index) => (
        <li
          key={index}
          className={classnames("nav-item", {
            current: this.props.location.pathname === item.path
          })}
        >
          <Link
            to={item.path}
            className="nav-link"
            onClick={this.onClickMenu.bind(this)}
          >
            {item.name}
          </Link>
        </li>
      ));
    }
    return (
      <header>
        <div className="menu-btn" onClick={this.onClickMenu.bind(this)}>
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>

        <nav className="menu">
          <div className="menu-branding">
            <div className="portrait" />
          </div>
          <ul className="menu-nav">{menuContent}</ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
