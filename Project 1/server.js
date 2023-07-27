
const express = require('express');
const app = express();


const bodyParser = require('body-parser');


app.use(bodyParser.json());


app.listen(3000, () => {
    console.log("Server Started at port no. 3000")
});


app.get('/', (request,response) => {
    response.send("This is HomePage");
})

app.post('/api/cars', (request,response) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Car Submitted Successfully.")
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myDatabase', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
})
.then(() => {console.log("Connection Successful")})
.catch((error) => {console.log("Received an error")} );