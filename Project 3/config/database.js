const mongoose = require("mongoose");

require("dotenv").config();

const connectwithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(console.log("Database connected Successfully"))
    .catch((error) => {
        console.log("Database connection Failed");
        console.log(error);
        process.exit(1);
    } )
};

module.exports = connectwithDb;