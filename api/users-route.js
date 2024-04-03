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
    // const users = generateUsers();
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

  // Get user detail
//   route.get('/:id', (request, response) => {
//     const users = generateUsers();

//     // Find the id
//     const id = request.params.id;
//     for (const user of users) {
//       if (user.id === id) {
//         return response.status(200).json(user);
//       }
//     }

//     // User not found
//     throw new Error('User not found');
//   });
// };
