const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const Cors = require('cors')
const morgan = require('morgan');
app.use('/public',express.static('public'));
app.use(Cors());

// const router = require('./router/index');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const router = require("./router/index");
  app.use(router);
// app.get('/', function (req, res) {
//     res.send('Hello World')
//   })
const port = process.env.PORT || 8000;

app.listen(port,()=> console.log(`server running on port ${port}`))