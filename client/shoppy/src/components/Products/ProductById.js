import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { productById } from "../actions/productActions";
import {
  removeFromBag,
  addToBag,
  fetchProducts
} from "../actions/productActions";

const ProductById = props => {
  useEffect(() => {
    props.productById(null, props.match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.id]);

  useEffect(() => {
    const current_img = document.querySelector(
      ".product_by_id_gallery_current_img img"
    );
    const image_thumbnail = document.querySelector(
      ".product_by_id_gallery_thumbnail"
    );
    const imageGalleryHandler = e => {
      current_img.src = e.target.src;
    };
    Array.from(image_thumbnail.children).map(item => {
      return item.addEventListener("click", imageGalleryHandler);
    });

    const order_btn = document.querySelector(".order_btn");
    const modal = document.querySelector(".modal");
    const toggleModal = () => {
      modal.classList.add("openModal");
    };

    order_btn.addEventListener("click", toggleModal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const sizeWraper = document.querySelectorAll(
      ".product_by_id_main_info_size_item"
    );

    Array.from(sizeWraper).map(item => {
      if (props.product && props.product.size.includes(item.innerHTML)) {
        return item.classList.add("size_color");
      } else {
        return null;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [size, setSize] = useState(["S", "M", "L", "X", "XL"]);
  const { product } = props;

  console.log(product && product.brand);

  return (
    <div className="product_by_id">
      <div className="product_by_id_main_info">
        <div className="product_by_id_gallery">
          <div className="product_by_id_gallery_current_img">
            <img src={product && product.img} alt="" />
          </div>
          <div className="product_by_id_gallery_thumbnail">
            <div className="product_by_id_gallery_thumbnail_image">
              <img
                alt=""
                src="/assets/product-gallery/gallery-thumbnail-1.png"
              />
            </div>
            <div className="product_by_id_gallery_thumbnail_image">
              <img
                alt=""
                src="/assets/product-gallery/gallery-thumbnail-2.png"
              />
            </div>
            <div className="product_by_id_gallery_thumbnail_image">
              <img alt="" src={product && product.img} />
            </div>
          </div>
        </div>
        <div className="product_by_id_basic_info">
          <div className="product_by_id_basic_info_description">
            <h1>{product && product.name}</h1>
            <div className="product_by_id_main_info_category">
              {product &&
                product.category.map((item, index) => {
                  return (
                    <p key={index}>
                      {product &&
                      product.category[product.category.length - 1] === item
                        ? item
                        : item + "+"}
                    </p>
                  );
                })}
            </div>
            <p>{product && product.description}</p>
          </div>
          <div className="product_by_id_size_and_quantity">
            <div className="product_by_id_main_info_size">
              <p>Choose size</p>
              {size.map(item => {
                return (
                  <div
                    className="product_by_id_main_info_size_item_wraper"
                    key={item}
                  >
                    <div className="product_by_id_main_info_size_item">
                      {item}
                    </div>
                    <span>-</span>
                  </div>
                );
              })}
            </div>
            <div className="product_by_id_main_info_quantity">
              {product && (
                <button
                  onClick={e => props.addToBag(e, props.match.params.id)}
                  disabled={product.count >= 0 ? false : true}
                >
                  +
                </button>
              )}
              <span className="product_count">{product && product.count}</span>
              {product && (
                <button
                  onClick={e => props.removeFromBag(e, props.match.params.id)}
                  disabled={product.count <= 0 ? true : false}
                >
                  -
                </button>
              )}
            </div>
          </div>
          <div className="product_by_id_main_info_price_order">
            <div className="product_by_id_main_info_price">
              <p>Price {product && product.price}$</p>
            </div>
            <div className="product_by_id_main_info_order">
              <div className="product_by_id_main_info_order">
                <i className="fas fa-globe-americas"></i>
                <i className="fas fa-cart-plus"></i>
                <i className="far fa-heart"></i>
              </div>
              <button className="order_btn">Order Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="related_products_wraper">
        <h2>
          RELATED <span>PRODUCTS</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, iure
          nemo?
        </p>
        <div className="related_products">
          {props.product &&
            props.products.map(item => {
              return (
                item.brand == product.brand &&
                product.brand && (
                  <div className="product" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="product_info_trademark_name">
                      {item.name}
                    </div>
                    <div className="product_price">
                      <span>{item.price}</span> $
                    </div>
                    <div className="product_side_info_on_hover">
                      <span className="product_side_info_on_hover_size_headline">
                        Sizes :
                      </span>
                      <span className="product_side_info_on_hover_sizes">
                        {item.size.map(item => item + "-")}
                      </span>
                      <div className="product_available_colors">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div className="product_side_info_on_hover_icons">
                        <i className="fas fa-globe"></i>
                        <i className="fas fa-cart-arrow-down"></i>
                        <i className="far fa-heart"></i>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
        </div>
      </div>
    </div>
  );
};

const actions = { productById, addToBag, removeFromBag, fetchProducts };
const mapStateToProps = state => {
  return {
    products: state.products.products,
    product: state.products.product
  };
};

export default connect(mapStateToProps, actions)(ProductById);
