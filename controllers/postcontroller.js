const Post = require('../dbs/post');
const responder = require('../utils/helper');


const all = async (req, res, next) => {
    let posts = await Post.find();
    responder(res, "All posts", posts)
}

const get = async (req, res, next) => {
    let id = req.params.id
    let post = await Post.findById(id).populate("user")

    responder(res, "Single post", post)
}

const post = async (req, res, next) => {
    let post = new Post(req.body)
    post.save();

    responder(res, "New post is created successfully.", post)
}


module.exports = {
    all, get, post
}