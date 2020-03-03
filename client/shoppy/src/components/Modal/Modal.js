import React, { useEffect } from "react";
import "./Modal.scss";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";

const Modal = props => {
  useEffect(() => {
    const modal = document.querySelector(".modal");
    const closeModal = e => {
      if (e.target.classList.contains("modal")) {
        modal.classList.remove("openModal");
      } else {
        return;
      }
    };
    modal.addEventListener("click", closeModal);
    return () => {
      modal.removeEventListener("click", closeModal);
    };
  }, []);

  useEffect(() => {
    props.fetchProducts("all");
  }, [props.product && props.product.count]);

  return (
    <div className="modal">
      <div className="modal_inner">
        {props.products &&
          props.products.map(item => {
            return (
              <div
                key={item.id}
                style={{ display: item.count == 0 ? "none" : "block" }}
                className="modal_product"
              >
                <div className="modal_product_info">
                  <img src={item.img} alt="" />
                  <div className="modal_product_info_inner">
                    <p className="modal_product_info_inner_trademark">
                      {item.name}
                    </p>
                    <p>
                      {" "}
                      <span>Quantity: {item.count}</span>
                    </p>
                    <p className="modal_product_info_inner_price">
                      Price : <span>{item.count * item.price}$</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        <div>Total price :</div>
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

export default connect(mapStateToProps, actions)(Modal);
