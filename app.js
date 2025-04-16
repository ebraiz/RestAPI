require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

const productsRouters = require("./routes/products");

app.get("/", (req, res) => {
    res.send("Hi, I'm live");
});

// middleware to set router
app.use("/api/products", productsRouters);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connected.`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
