const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const { articleSchema } = require('../mongodb');

// Create a model using the articleSchema
//buat model atau collection
// artinya collection articlesdata bakal pake schema dari articleSchema
const ArticleModel = mongoose.model('ArticlesData', articleSchema);

module.exports = (app) => {
    app.use('/articles', route);
};

    let articleList = [];

    route.get('/', async (req, res) => {
        const articleData = await ArticleModel.find();
        return res.status(200).json(articleList);
    });

    route.post('/', async (req, res) => {
        const newArticle = new ArticleModel(req.body);
        newArticle.save();
        articleList.push(newArticle);
        res.send(newArticle);
    });
    
    module.exports = route;
