const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/shop",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})


mongoose.connection.on('open',()=>{
    console.log('moongo connection is on...')
})

mongoose.connection.on('error',(_error: any)=>{
    console.log(`mongoose connection error `)
});


// mongoose.set('useCreateIndex',true)


// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/shop');
// }