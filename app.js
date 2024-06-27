import chalk from 'chalk';
import createDebug from 'debug'
const debug = createDebug('app')
import morgan from 'morgan';
import path from 'path';
import express from 'express';

import productsRouter from "./src/router/productsRouter.mjs"

const PORT = process.env.PORT
const __dirname = path.resolve();

const app = express();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")))

app.set("views", "./src/views");
app.set("view engine", "ejs");



app.use("/products", productsRouter)

app.get("/", (req, res) => {

    res.render('index', { username: 'natthawut' });

})

app.listen(PORT, () => {

    console.log("Listening on port" + chalk.green(PORT));
})
