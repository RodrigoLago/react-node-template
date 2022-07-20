'use strict'
const express = require('express');
const path = require('path');
const port = process.env.PORT || 4000

//webpack
const webpack = require('webpack');
const webpackDev = require('webpack-dev-middleware');
const config = require('./webpack.config');

const app = express();

//middlewares
app.use(webpackDev(webpack(config)));

// static files
app.use(express.static(path.join(__dirname,'public')));

//starting server
/*app.listen(3000,()=>{
      console.log('Server listeninig on port 3000')
})*/
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))