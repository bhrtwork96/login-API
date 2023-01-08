const User = require('../models/user');
const user = require('../models/user')

// midleware function for validate before register 

const checkregisterData = async (req, res, next) => {
    const { user, username, email, password } = req.body;
    try {
        const userData = await User.findOne({ user: user});
        if (userData) {
            res.status(500).send("user name already available ")
            return
        }
        else {
            const userData1 = await User.findOne({email:email})
            if(userData1){
                res.status(500).send("Email already register ")
                return
            }
            else{
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                    next()
                }
                else {
                    res.status(500).send("Email is not valid")
                    return
                }
            }
        }
    }

    catch (err) {
        console.log(err)
        res.status(400).send("Internal Error")
    }

}

module.exports = { checkregisterData }