const mongoose = require('mongoose');


const Schema = mongoose.Schema;

//Object change wareave you wante
const Document = new Schema({
    _id: String,
    data : Object
});

//This exports my model Document to have a new Schema;

const DocumenteSchema = mongoose.model('Document', Document);


module.exports = DocumenteSchema;



