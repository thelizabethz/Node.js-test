import express from 'express';
import chalk from 'chalk';
import createDebug from 'debug'
const debug = createDebug('app')
import morgan from 'morgan';
const app = express();
const port = 3000;

app.use(morgan('combined'));
app.get("/",(req,res)=>{

    res.send('Hello Natthawut');

})

app.listen(port,()=>{

    console.log("Listening on port" + chalk.green(port));
})