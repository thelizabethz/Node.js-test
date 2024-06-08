import express from 'express';
import chalk from 'chalk';
import createDebug from 'debug'
const debug = createDebug('app')
import morgan from 'morgan';
import path from 'path';
import fs from "fs";
const app = express();
const products = JSON.parse(fs.readFileSync("./data/products.json"));
const PORT = process.env.PORT
const __dirname = path.resolve();

const productRouter = express.Router();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")))

app.set("views", "./src/views");
app.set("view engine", "ejs");

productRouter.route("/").get((req, res) => {
    res.render("products",{ 
        products,
    }
    );
});

productRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.render("product",{
        product: products[id],
    })
});

app.use("/products", productRouter)

app.get("/", (req, res) => {

    res.render('index', { username: 'natthawut' });

})

app.listen(PORT, () => {

    console.log("Listening on port" + chalk.green(PORT));
})
