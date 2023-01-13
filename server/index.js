require('rootpath')();
const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const fileUpload = require('express-fileupload');
require('dotenv').config({ path: "./.env" });
const path = require('path')


global.appRoot = path.resolve(__dirname);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/src/uploads', express.static('src/uploads')); 
const database = require("./src/utils/db")
database();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to chat application" });
});
app.use(fileUpload());
app.use('/api',require('./src/routes'));
// set port, listen for requests
const PORT =process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});