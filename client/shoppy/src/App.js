import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./config.scss";

import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import HotDeals from "./components/Deals/HotDeals";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import ProductById from "./components/Products/ProductById";
import BlogDetails from "./components/Blog/BlogDetails";

import Footer from "./components/Footer/Footer";
import ModalMenu from "./components/ModalMenu/ModalMenu";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Modal />
      <ModalMenu />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:id" component={ProductById} />
          <Route path="/hot-deals" component={HotDeals} />
          <Route path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/:id" component={BlogDetails} />
          <Route path="/contact" component={Contact} />
          <Route path="/products/filter/:sort" component={Products} />
        </Switch>
      </div>
      <div className="container">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
