const express = require('express');
const app = express();
const PORT = 8080;
const axios = require('axios');
const url = 'https://fakestoreapi.com/products'

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/products', (req, res) => {
    axios.get(url)
        .then(response => {
            res.header("Access-Control-Allow-Origin", "*")
            res.send(response.data);
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

app.get('/products/:id', (req, res) => {
    axios.get(url + '/' + req.params.id)
        .then(response => {
            res.header("Access-Control-Allow-Origin", "*")
            res.send(response.data);
        })
        .catch(error => {
            res.status(500).send(error);
        });
});


