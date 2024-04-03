
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
//buat model atau collection
// artinya collection articlesdata bakal pake schema dari articleSchema

module.exports = {
    articleSchema,
    userSchema,
    mongoose
};

// module.exports = new mongoose.model('UsersData', userSchema);
// module.exports = new mongoose.model('ArticlesData', articleSchema);


// module.exports.ArticlesData = new mongoose.model('ArticlesData', articleSchema);
// module.exports.UsersData = new mongoose.model('UsersData', userSchema);

// const articleData = mongoose.model('ArticlesData', articleSchema);
// const usersData= mongoose.model('UsersData', userSchema);

// module.exports = {
//     articleData,
//     usersData
// };