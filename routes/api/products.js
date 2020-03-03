const express = require("express");
const router = express.Router();
const products = require("./products.json");

//  #route GET
//  @desc Get all products
//  @access Public
router.get("/", (req, res) => {
  res.json(products);
});
//  #route GET
//  @desc Get product id
//  @access Public
router.get("/:id", (req, res) => {
  const post = products.find(item => {
    if (item.id == req.params.id) {
      return item;
    }
  });
  if (!post) {
    return res.status(400).send({ msg: "Comment not found" });
  }
  res.json(post);
});

//  #route GET
//  @desc Filtering products
//  @access Public
router.get("/filter/:sort", (req, res) => {
  if (req.params.sort === "Man") {
    const sortMan = products.filter(item => {
      return item.genre === req.params.sort;
    });
    res.json(sortMan);
  } else if (req.params.sort === "Women") {
    const sortWomen = products.filter(item => {
      return item.genre === req.params.sort;
    });
    res.json(sortWomen);
  } else if (req.params.sort === "Kids") {
    const sortKids = products.filter(item => {
      return item.genre === req.params.sort;
    });
    res.json(sortKids);
  } else if (req.params.sort === "all") {
    res.json(products);
  } else if (req.params.sort === "hot") {
    const sortHotDeals = products.filter(item => {
      return item.price < 100;
    });
    res.json(sortHotDeals);
  } else if (req.params.sort === "small") {
    const sortSmall = products.filter(item => {
      return item.size.includes("S");
    });
    res.json(sortSmall);
  } else if (req.params.sort === "medium") {
    const sortMedium = products.filter(item => {
      return item.size.includes("M");
    });
    res.json(sortMedium);
  } else if (req.params.sort === "large") {
    const sortLarge = products.filter(item => {
      return item.size.includes("L");
    });
    res.json(sortLarge);
  } else if (req.params.sort === "xlarge") {
    const sortXLarge = products.filter(item => {
      return item.size.includes("XL");
    });
    res.json(sortXLarge);
  } else if (req.params.sort === "reebok") {
    const sortReebok = products.filter(item => {
      return item.brand.includes("Reebook");
    });
    res.json(sortReebok);
  } else if (req.params.sort === "addidas") {
    const sortAddidas = products.filter(item => {
      return item.brand.includes("Addidas");
    });
    res.json(sortAddidas);
  } else if (req.params.sort === "nike") {
    const sortNike = products.filter(item => {
      return item.brand.includes("Nike");
    });
    res.json(sortNike);
  }
});
router.get("/add_to_cart/:id", (req, res) => {
  const currentProduct = products.find(item => {
    return item.id === req.params.id;
  });
  currentProduct.count++;
  res.json(currentProduct);
});
router.get("/remove_from_cart/:id", (req, res) => {
  const currentProduct = products.find(item => {
    return item.id === req.params.id;
  });
  if (currentProduct.count === 0) {
    return { msg: "You haven't add this product to cart" };
  } else {
    currentProduct.count--;
  }
  res.json(currentProduct);
});

module.exports = router;
