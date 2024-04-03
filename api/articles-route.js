const express = require('express');
const route = express.Router();
const mongodb = require('../mongodb');

// module.exports = (app) => {
//     app.use('/articles', route);

    let articleList = [];

    route.get('/', async (req, res) => {
        const articleData = await mongodb.find();
        return res.status(200).json(articleList);
    });

    route.post('/', async (req, res) => {
        const articleData = new mongodb(req.body);
        articleData.save();
        articleList.push(articleData);
        res.send(articleData);
    });
    
    module.exports = route;

    // // Mendapatkan detail articles
    // route.get('/', (request, response) => {
    //     return response.status(200).json(articleList);
    // });


    // // Membuat article baru
    // route.post('/', (request, response) => {
    //     const article = {
    //         id: request.body.id,
    //         author: request.body.author,
    //         title: request.body.title,
    //         content: request.body.content,
    //         datetime: new Date(),
    //     };
    //     articleList.push(article);
    //     return response.status(201).json(article);
    // });



    // Medapatkan detail article sesuai dengan id yang diinginkan
    // route.get('/:id', (req, res) => {
    //     const articleId = req.params.id;
    //     const article = articleList.find(article => article.id.toString() === articleId.toString());
    //     if (article) {
    //         res.json(article);
    //     } else {
    //         res.status(404).json({ message: 'Article not found' });
    //     }
    // });
// };