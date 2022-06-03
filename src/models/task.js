const mongoose = require('mongoose');
const { Schema } = mongoose;
const moment = require('moment')
const hour = moment().format('LTS');

const taskSchema = new Schema({
    title: {type : String, required : true},
    description: {type: String, required : true},
    time: {type: String, required : false}
});

module.exports = mongoose.model('task', taskSchema);