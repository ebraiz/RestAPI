const Product = require("../models/product");

// http://localhost:5000/api/products
const getAllProducts = async (req, res) => {
    const myData = await Product.find({});
    res.status(200).json({ myData });
};


// http://localhost:5000/api/products/filtered?company=apple&name=iphone
// http://localhost:5000/api/products/filtered?featured=true
const getFilteredProducts = async (req, res) => {

    const { company, name, featured } = req.query;
    const queryObject = {};

    if (name) {
        queryObject.name = { $regex: name, $options: "i" }; //case insensitive search
    }

    if (company) {
        queryObject.company = company;
    }

    if (featured) {
        queryObject.featured = featured;
    }

    let apiData = Product.find(queryObject);

    //const myData = await Product.find({name:"iphone"}); //filtering based on name iphone only.
    //const myData = await Product.find(queryObject);//enable filtering

    const myData = await apiData;

    res.status(200).json({ myData });
};

// http://localhost:5000/api/products/selected
// http://localhost:5000/api/products/selected?select=name,price
const getSelectedProducts = async (req, res) => {

    const { select } = req.query;
    const queryObject = {};
    let apiData = Product.find(queryObject);

    if(select){
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix); //enable select products
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;
    let skip = (page - 1) * limit; //skip the first page data
    apiData = apiData.skip(skip).limit(limit); //enable pagination

    const myData = await apiData;

    res.status(200).json({ myData, nbHits: myData.length });
};

// http://localhost:5000/api/products/sorted?sort=-name
// http://localhost:5000/api/products/sorted?sort=name
const getSortedProducts = async (req, res) => {

    const { sort } = req.query;
    const queryObject = {};
    let apiData = Product.find(queryObject);

    if(sort){
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix); //enable sorting
    }

    const myData = await apiData;

    res.status(200).json({ myData });
};

module.exports = { 
    getAllProducts, 
    getFilteredProducts, 
    getSelectedProducts, 
    getSortedProducts 
};