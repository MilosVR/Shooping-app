import React from "react";
import "./ModalMenu.scss";
import { Link } from "react-router-dom";

const ModalMenu = () => {
  return (
    <div className="modal_menu">
      <div className="modal_close">
        <i className="far fa-window-close"></i>
      </div>
      <div className="modal_menu_inner">
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
    </div>
  );
};

export default ModalMenu;
