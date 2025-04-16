const express = require("express");
const router = express.Router();

const { getAllProducts, getFilteredProducts, getSelectedProducts, getSortedProducts } = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/filtered").get(getFilteredProducts);
router.route("/selected").get(getSelectedProducts);
router.route("/sorted").get(getSortedProducts);

module.exports = router;