const User = require('../dbs/user')
const responder = require('../utils/helper')

const all = async (req, res, next) => {
    let users = await User.find()
    responder(res, "All users", users)
}

const get = async (req, res, next) => {
    let id = req.params.id;
    let user = await User.findById(id)

    if(!user) {
        next(new Error("No user with that id"))
    }

    responder(res, "User detail", user)
}
      
const store = async (req, res, next) => {
    let user = new User(req.body)
    let result = await user.save()

    responder(res, "New user is saved successfully", result);
}

const update = async (req, res, next) => {
    let id = req.params.id;
    let user = await User.findById(id);

    if (user) {
        let user = User.findByIdAndUpdate(id, req.body);
        responder(res, "User is updated", user)
    } else {
        next(new Error("No user with that id"))
    }
}            
const destroy = async (req, res) => {
    let id = req.params.id;
    let user = await User.findById(id);

    if (user) {
        await user.deleteOne({ _id: id })
        responder(res, "User is deleted")
    } else {
        next(new Error("No user with that id"))
    }
    res.json('User delete')
}


module.exports = {
    all, get, store, update, destroy
}