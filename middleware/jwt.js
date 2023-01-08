const jwt = require('jsonwebtoken');
const tokenverify = (req,res, next)=>{
    const token = req.headers['token-acess']
    try{
        if(jwt.verify(token, process.env.SECRATEKEY)){
            next()
          }
    }
    catch(err){
        res.status(500).send("Token expire")
    }
   
}

module.exports = {tokenverify}