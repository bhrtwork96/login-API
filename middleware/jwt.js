const jwt = require('jsonwebtoken');
const tokenverify = (req,res, next)=>{
    const token = req.headers['token-acess']
    try{
        if(token){
        if(jwt.verify(token, process.env.SECRATEKEY)){
            next()
          }
        }
        else{
            res.status(401).send("Token missing")
        }
    }
    catch(err){
        res.status(401).send("Token invalid")
    }
   
}

module.exports = {tokenverify}