import mongoose from 'mongoose';

const blogSchema = mongoose.Schema({
    title: String,
    author: String,
    body: String,
    // comments: [{ body: String, date: Date }],
    // date: { type: Date, default: Date.now },
});

module.exports(Blog, blogSchema);