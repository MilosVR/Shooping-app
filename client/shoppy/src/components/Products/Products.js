import React, { useEffect, useState } from "react";
import "./Products.scss";
import { connect } from "react-redux";
import { fetchProducts, productById } from "../actions/productActions";
import { Link } from "react-router-dom";

const Products = props => {
  useEffect(() => {
    props.fetchProducts(props.match.params.sort);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.sort]);

  useEffect(() => {
    const range_input = document.querySelector("#range_input");
    const min_range_value = document.querySelector(".min_range_value");
    const max_range_value = document.querySelector(".max_range_value");
    min_range_value.innerHTML = range_input.min;
    max_range_value.innerHTML = range_input.max;
  });

  const [rangeInputValue, setRangeInputValue] = useState(0);
  const [loadMore, setLoadMore] = useState(9);

  const onLoadMore = () => {
    setLoadMore(loadMore + 3);
  };

  const rangeInput = e => {
    setRangeInputValue(e.target.value);
  };

  const sortbyGenreMan = () => {
    props.history.push("/products/filter/Man");
    props.fetchProducts(props.match.params.sort);
  };
  const sortbyGenreWomen = () => {
    props.history.push("/products/filter/Women");
    props.fetchProducts(props.match.params.sort);
  };
  const sortbyGenreKids = () => {
    props.history.push("/products/filter/Kids");
    props.fetchProducts(props.match.params.sort);
  };
  const sortbyHotDeals = () => {
    props.history.push("/products/filter/hot");
    props.fetchProducts(props.match.params.sort);
  };
  const sortSmall = () => {
    props.history.push("/products/filter/small");
    props.fetchProducts(props.match.params.sort);
  };
  const sortMedium = () => {
    props.history.push("/products/filter/medium");
    props.fetchProducts(props.match.params.sort);
  };
  const sortLarge = () => {
    props.history.push("/products/filter/large");
    props.fetchProducts(props.match.params.sort);
  };
  const sortXLarge = () => {
    props.history.push("/products/filter/xlarge");
    props.fetchProducts(props.match.params.sort);
  };
  const sortReebok = () => {
    props.history.push("/products/filter/reebok");
    props.fetchProducts(props.match.params.sort);
  };
  const sortAddidas = () => {
    props.history.push("/products/filter/addidas");
    props.fetchProducts(props.match.params.sort);
  };
  const sortNike = () => {
    props.history.push(`/products/filter/nike}`);
    props.fetchProducts(props.match.params.sort);
  };
  const [isShowCategory, setIsShowCategory] = useState(false);
  const [isShowSize, setIsShowSize] = useState(false);
  const [isShowBrand, setIsShowBrand] = useState(false);
  const showCategories = () => {
    setIsShowCategory(!isShowCategory);
  };
  const showSize = () => {
    setIsShowSize(!isShowSize);
  };
  const showBrand = () => {
    setIsShowBrand(!isShowBrand);
  };

  return (
    <div className="products">
      <div className="product_filter_wraper">
        <div className="product_filter_on_collapse">
          <div>
            <button onClick={showCategories}>Categories</button>
            {isShowCategory && (
              <ul>
                <li onClick={sortbyGenreMan}>Man</li>
                <li onClick={sortbyGenreWomen}>Women</li>
                <li onClick={sortbyGenreKids}>Childrens</li>
                <li onClick={sortbyHotDeals}>Hot Deals</li>
              </ul>
            )}
          </div>
          <div>
            <button onClick={showSize}>Sizes</button>
            {isShowSize && (
              <ul>
                <li onClick={sortSmall}>Small</li>
                <li onClick={sortMedium}>Medium</li>
                <li onClick={sortLarge}>Large</li>
                <li onClick={sortXLarge}>X Large</li>
              </ul>
            )}
          </div>
          <div>
            <button onClick={showBrand}>Brands</button>
            {isShowBrand && (
              <ul>
                <li onClick={sortReebok}>Reebok</li>
                <li onClick={sortAddidas}>Addidas</li>
                <li onClick={sortNike}>Nike</li>
              </ul>
            )}
          </div>
        </div>
        <div className="products_filter">
          <div className="product_categories">
            <h2>Categories</h2>
            <ul>
              <li onClick={sortbyGenreMan}>Man</li>
              <li onClick={sortbyGenreWomen}>Women</li>
              <li onClick={sortbyGenreKids}>Childrens</li>
              <li onClick={sortbyHotDeals}>Hot Deals</li>
            </ul>
          </div>
          <div className="product_price_filter">
            <h2>Price Filter</h2>
            <form>
              <div className="product_price_filter_from_to">
                <span className="min_range_value"></span>
                <span className="max_range_value"></span>
              </div>
              <input
                id="range_input"
                type="range"
                min="0"
                max="200"
                step="10"
                onInput={rangeInput}
                defaultValue={rangeInputValue}
              />
              <div className="product_price_filter_from_to">
                <span>From</span>
                <span>To</span>
              </div>
            </form>
          </div>
          <div className="product_sizes">
            <h2>Sizes</h2>
            <ul>
              <li onClick={sortSmall}>Small</li>
              <li onClick={sortMedium}>Medium</li>
              <li onClick={sortLarge}>Large</li>
              <li onClick={sortXLarge}>X Large</li>
            </ul>
          </div>
          <div className="product_brands">
            <h2>Brands</h2>
            <ul>
              <li onClick={sortReebok}>Reebok</li>
              <li onClick={sortAddidas}>Addidas</li>
              <li onClick={sortNike}>Nike</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="product_list_wraper">
        <div className="product_list">
          {props.products.slice(0, loadMore).map(item => {
            return (
              <Link
                key={item.id}
                to={`/products/${item.id}`}
                className={`product_link ${
                  item.price < parseInt(rangeInputValue)
                    ? "range_input_show_hide"
                    : ""
                }`}
              >
                <div className="product">
                  <img src={item.img} alt="" />
                  <div className="product_info_trademark_name">{item.name}</div>
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
              </Link>
            );
          })}
        </div>
        {loadMore <= props.products.length - 1 && (
          <button className="loadMore" onClick={onLoadMore}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

const actions = {
  fetchProducts,
  productById
};

const mapStateToProps = state => {
  return {
    products: state.products.products
  };
};

export default connect(mapStateToProps, actions)(Products);
