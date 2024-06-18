import express from "express";
import fs from "fs";

const productsRouter = express.Router();

const products = JSON.parse(fs.readFileSync("src/data/products.json"));

productsRouter.route("/").get((req, res) => {
    res.render("products",{ 
        products,
    }
    );
});

productsRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.render("product",{
        product: products[id],
    })
});

export default productsRouter;