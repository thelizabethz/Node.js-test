import express from 'express';
import chalk from 'chalk';
import createDebug from 'debug'
const debug = createDebug('app')
import morgan from 'morgan';
import path from 'path';
const app = express();
const PORT = process.env.PORT
const __dirname = path.resolve();
const productRouter = express.Router();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")))

app.set("views","./src/views");
app.set("view engine","ejs");

productRouter.route("/").get((req,res) =>{
    res.send("Hello I'm Product");
});

productRouter.route("/1").get((req,res) =>{
    res.send("Hello I'm Product 1");
});

app.use("/products",productRouter)

app.get("/", (req, res) => {

    res.render('index',{username:'natthawut'});

})

app.listen(PORT, () => {

    console.log("Listening on port" + chalk.green(PORT));
})