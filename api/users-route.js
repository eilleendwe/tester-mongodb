const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const { userSchema } = require('../mongodb');


const UserModel = mongoose.model('UsersDatas', userSchema);
module.exports = (app) => {
  app.use('/users', route);
};

  let usersList = [];

  // Get list of users
  route.get('/', async (req, res) => {
    const userData = await UserModel.find();
    return res.status(200).json(usersList);
    // return response.status(200).json(users);
  });

  // Create new user
  route.post('/', (req, res) => {
    const userData = new UserModel(req.body);
    userData.save();
    usersList.push(userData);
    res.send(userData);
    // const user = {
    //   id: request.body.id,
    //   username: request.body.username,
    //   fullname: request.body.fullname,
    //   created_at: new Date().toISOString(),
    // };
    // return res.status(200).json(user);
  });

  module.exports = route;


