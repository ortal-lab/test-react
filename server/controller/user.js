const User = require("../model/user");
const createUser = async (req, res) => {
    const email = req.body.email;
    let user = await User.findOne({ email: email });
    if (user) {
        return res.status(400).send("user already exists");
    }
    try{

        user = new User(req.body);
        user =await user.save();
        console.log(user)
        res.status(200).json({ user: user });
    }
    catch(err){
        return res.status(400).send("faile to save user");

    }
  
};

const getAllUsers = async (req, res) => {
    try {
        let users = await User.find();
        res.status(200).json({ users: users });
    } catch (err) {
        return res.status(400).send("failes");
    }
};

module.exports = { createUser, getAllUsers };
