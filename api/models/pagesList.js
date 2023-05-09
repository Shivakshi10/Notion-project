const mongoose = require("mongoose");

const pagesListSchema = new mongoose.Schema({
    name:{
type:String,
required: true
    },
    img:{
        type: String
       },
       desc:{
        type:String,
        required:true
       }
})

module.exports = mongoose.model('PagesList',pagesListSchema);