const mongoose = require('mongoose');

const URI = 'mongodb+srv://RyuTsuki08:<passwordcluster>@ryutsuki088.wkhqi.mongodb.net/RyuTsuki088?retryWrites=true&w=majority'

mongoose.connect(URI)
    .then(db => console.log('connected to database'))
    .catch(err => console.log(err));


module.exports = mongoose;
