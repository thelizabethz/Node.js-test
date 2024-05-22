import express from 'express';
import chalk from 'chalk';
import createDebug from 'debug'
const debug = createDebug('app')
import morgan from 'morgan';
import path from 'path';
const app = express();
const PORT = process.env.PORT
const __dirname = path.resolve();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")))
app.get("/", (req, res) => {

    res.send('Hello Natthawut.31');

})

app.listen(PORT, () => {

    console.log("Listening on port" + chalk.green(PORT));
})