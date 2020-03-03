import React, { useEffect } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";

const Navbar = props => {
  useEffect(() => {
    props.fetchProducts("all");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.product && props.product.count]);

  useEffect(() => {
    const changeNavbarBG = e => {
      const navbar_header = document.querySelector(".navbar_header");
      let scroll_position = window.scrollY;
      const navbar_navigation_links = document.querySelector(
        ".navbar_navigation_links"
      );

      if (scroll_position > 100) {
        navbar_header.style.display = "none";
        navbar_navigation_links.style.height = "100px";
      } else {
        navbar_header.style.display = "block";
        navbar_navigation_links.style.height = "150px";
      }
    };

    window.addEventListener("scroll", changeNavbarBG);
    return () => {
      window.removeEventListener("scroll", changeNavbarBG);
    };
  });

  useEffect(() => {
    const modal_menu = document.querySelector(".modal_menu");
    const hamburger_menu = document.querySelector(".hamburger_menu");
    const modal_close = document.querySelector(".modal_close");
    const modal_menu_inner = document.querySelector(".modal_menu_inner ul");

    modal_close.style.display = "none";
    const openModal = () => {
      modal_menu.classList.add("modal_open");
      modal_close.style.display = "block";
    };
    const closeModal = () => {
      modal_menu.classList.remove("modal_open");
      modal_close.style.display = "none";
    };

    Array.from(modal_menu_inner.children).map(item => {
      return item.addEventListener("click", closeModal);
    });
    modal_close.addEventListener("click", closeModal);
    hamburger_menu.addEventListener("click", openModal);
  });

  useEffect(() => {
    const shopping_icon = document.querySelector(
      ".navbar_navigation_shopping_icon"
    );
    const modal = document.querySelector(".modal");
    const toggleModal = e => {
      modal.classList.add("openModal");
    };
    shopping_icon.addEventListener("click", toggleModal);
  });

  console.log();

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar_header">
          <div className="navbar_header_info">
            <div className="navbar_header_info_inner">
              <div className="navbar_header_info_item">
                <i className="far fa-envelope"></i>
                <p>info@shopy.com</p>
              </div>
              <div className="navbar_header_info_item">
                <i className="fas fa-address-card"></i>
                <p>453-5553-996</p>
              </div>
            </div>
            <div className="navbar_header_info_social_icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-google-plus-g"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="navbar_navigation_links">
          <div className="navbar_navigation_links_inner">
            <div className="logo">
              <div className="logo_header">
                <h2>SH</h2>
                <div className="logo_inner">
                  <i className="fas fa-shopping-basket"></i>
                </div>
                <h2>PY</h2>
              </div>
              <p>shope anywhere</p>
            </div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products/filter/all">Products</Link>
              </li>
              <li>
                <Link to="/hot-deals">Hot Deals</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="navbar_navigation_icons">
            <i className="fas fa-search"></i>
            <i className="fas fa-user-astronaut"></i>
            <div className="navbar_navigation_shopping_icon">
              <i className="fas fa-shopping-basket"></i>
              <div className="shopping_items">
                {props.products &&
                  props.products.filter(item => {
                    return parseInt(item.count) !== 0;
                  }).length}
              </div>
            </div>
            <div className="hamburger_menu">
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const actions = { fetchProducts };

const mapStateToProps = state => {
  return {
    products: state.products.products,
    product: state.products.product
  };
};

export default connect(mapStateToProps, actions)(Navbar);
