//require('dotenv').config({path:'./env'});
import "dotenv/config";

import connectDB from './db/index.js';


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,()=>{
        console.log(`server is Running at PORT: ${process.env.PORT} `)
    })
})
.catch((err)=>{
    console.log(`MOngoDB Connection id Failed !!!!!!!! ${err}`)
})

