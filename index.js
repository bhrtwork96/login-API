const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 8025
const mongoose = require('mongoose');
const { authRoutes, homeRoutes } = require('./routes');
mongoose.set('strictQuery', false);
require('dotenv').config();



//middleware 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//routes
app.use(authRoutes)
app.use(homeRoutes)








app.listen(port, async()=>{
    console.log(`server statred at http://localhost:${port}`)
   
    try{
        await mongoose.connect(process.env.DB )
        console.log("Database connected")
    }
    catch(err)
   {
    console.log(err)
   }

})