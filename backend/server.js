require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express();


const port = 8080 ;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected!'))
  .catch((err) => console.log('error occured',err));

// let user1 = new User({
//   username : 'shivam kushwah',
//   password : 'shivam@123',
//   gmail : 'demo@gmail.com'
// });

// user1.save()
// .then(user => console.log("user saved!!" , user))
// .catch(err => console.log("error occurs" , err));


app.listen(port , () => {
  console.log(`app is listening at port ${port}`);
});