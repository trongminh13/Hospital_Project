const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');
// const slug = require('mongoose-slug-generator');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);
const Course = new Schema({
    name: { type: String, required: true, },
    description: { type: String },
    image: { type: String },
    doctor: { type: String },
    videoId: { type: String, required: true, },
    level: { type: String },
    address: {type: String},
    class:{type: String},
    slug: { type: String,slug: 'name',unique:true },

},{
    timestamps: true,
});

//add plug
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course',Course);

