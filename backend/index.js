const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const imageRoute = require("./routes/image");
const path = require('path')

var cors = require('cors');
app.use(cors());
dotenv.config()
mongoose.connect(
    process.env.MONGO_URL
).then(()=>console.log("MongoDB is connected")).catch((err)=>console.log(err)
);
app.use(express.json());


app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",productRoute);
app.use("/api/images",imageRoute);

// Deployment
__dirname = path.resolve(); 

const port = process.env.PORT || 5000;
// HEROKU
if(process.env.NODE_ENV == 'production'){
    app.use(express.static(path.join(__dirname,"/idr_website/build")));

    app.get('*',(req, res) =>{
        res.sendFile(path.resolve(__dirname,'idr_website','build','index.html'))
    })
}



app.listen(port ,()=>{
    console.log("backend server is running")
})
