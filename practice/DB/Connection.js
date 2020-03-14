const mongoose = require('mongoose');

const URI = 'mongodb+srv://dbUser:dbUser@cluster-prostate-80clo.azure.mongodb.net/test?retryWrites=true&w=majority';

const connectDB = async()=>{
    await mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});
    console.log("DB connected.");
};

module.exports = connectDB;