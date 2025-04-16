require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");

const ProductJson = require("./products.json");

// > node productDB.js

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany({}); // Clear the existing data in the collection
        await Product.create(ProductJson);
        console.log("Success! Data added to the database.");
    } catch (error) {
        console.log(error);
    }
};

start();