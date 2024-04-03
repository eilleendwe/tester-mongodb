
const express = require('express');
const app = express();
const port = 3000;

const articlesRoute = require('../tester-mongodb/api/articles-route');
const usersRoute = require('../tester-mongodb/api/users-route');

app.use(express.json());

// app.use(require("./api/articles-route"));
// app.use(require("./users-route"));

app.use('/api/articles', articlesRoute);
app.use('/api/users', usersRoute);

app.listen(port, ()=>{
    console.log('running on port', port);
})