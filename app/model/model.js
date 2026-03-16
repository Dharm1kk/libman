const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String
    },
    bookId:{
        type:Number,
        required:true,
        unique:true
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Book', bookSchema);