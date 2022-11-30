const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//setup app & its routes
const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({"origin":"*"}));
const routes = require('./app/routes');
app.use('/api',routes);

const port = 8080;

//start http server
app.listen(port, ()=>{console.log("Rodando na porta ", port)});

module.exports = { app };
