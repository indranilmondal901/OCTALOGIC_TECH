const mongoose = require('mongoose');
const url= "mongodb+srv://indranilmondal901:abcd1234@cluster0.lt8yzl3.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Your DB is sucessfully connected with Node.js")
}).catch((err)=>{
    console.log("Failed in Connting to DB due to => " + err)
})