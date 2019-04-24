const mongoose = require('mongoose');
const {Schema} = mongoose;

const studentsSchema = new Schema({

name: {type:String, required: true},
lastName: {type:String, required: true},
secondSurname:{type:String, required: true},
grades:{type:Number, required: false}

});

module.exports=mongoose.model('Students',studentsSchema);