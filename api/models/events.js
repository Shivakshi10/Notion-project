const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema({
    title:{
type:String,
required: true
    },
    start:{
     type: Date,
     required:true
    }
});

module.exports = mongoose.model('Eventslist',eventsSchema);