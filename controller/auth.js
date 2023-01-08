const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user')

// controller function for register
const register = async (req, res) => {
    const { user, username, email, password } = req.body;
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    try {
        const userdata = await User.create({user:user, username:username,email:email,password:hash })
        userdata.save();
        res.send("user registered")
    }
    catch (err) {
        console.log(err)
        res.status(400).send("Internal Error")
    }

}
// controllerfunctin for login
const login = async (req, res) =>{
    const {user, password} = req.body;
    try{
        const userData = await User.findOne({user:user})
        if(userData){
            if(bcrypt.compareSync(password, userData.password)){
                const token = jwt.sign({ user:userData.user }, process.env.SECRATEKEY);
                res.send({user:user, token:token})
            }
        }
    }
    catch(err){
        console.log(err)
        res.status(400).send("Internal Error")
    }
}

module.exports = { register, login }