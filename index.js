const express = require('express');
const axios = require('axios');

const server = express();
const port = 3000;

server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static('public'));

server.get('/', async (req, res) => { 

    const { hashtag } = req.query;

    const response = await axios.get(
        encodeURI(`https://www.instagram.com/explore/tags/${hashtag}/?__a=1`)
        );

    res.render('index', {
        items: response.data.graphql.hashtag.edge_hashtag_to_media.edges,
    });
});

server.get('/name', (req, res) => { 
    const name = req.query.name;

    res.render('index', {
        name,
    });
});

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});