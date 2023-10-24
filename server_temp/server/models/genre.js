const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const genreSchema = new Schema({
    name: {type: String, required: true, minLenght: 3, maxLength: 100}
})




genreSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `/genres/${this._id}`;
  });

module.exports = mongoose.model('Genre', genreSchema);