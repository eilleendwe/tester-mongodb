const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/tes")
.then(()=> {
    console.log('mongodb connected');
})
.catch(err => {
    console.error('mongodb erro:', err);
})

const articleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String
    },
    dateTime: {
        type: Date
    }
})


const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date
    }
})

module.exports = {
    articleSchema,
    userSchema,
    mongoose
};

