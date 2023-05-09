const mongoose = require("mongoose");

const templateSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date: {
    type: Date,
    default: Date.now
    },
    desc:{
        type:Array,
        default:[]
    },
    content: {
        type: String,
        required: true
        }
    })
    module.exports = mongoose.model('Template',templateSchema);