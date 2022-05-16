const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./src/dal/db');
const dotenv = require('dotenv');
const productAPI = require('./src/api/product.api');

const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

app.get('/', (req, res) => {
    res.send("Product Microservice");
})

app.use('/products', productAPI());

app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`);
});

