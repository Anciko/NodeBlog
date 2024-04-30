require('dotenv').config()
const express = require('express')
const userRoute = require('./routes/user')
const postRoute = require('./routes/post')

const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const app = express()

app.use(express.json())
app.use(fileUpload())


const saveGallery = (req, res, next) => {
  if (1 + 1 == 2) {
    console.log(req.files)
    next()
  }
}

app.post('/galleries', saveGallery, (req, res, next) => {
  console.log('save gallery')
})

app.use('/users', userRoute)
app.use('/posts', postRoute)


// error handling
app.use((err, req, res, next) => {
  err.status = err.status || 200;
  res.status(err.status).json({
    message: err.message
  })
  res.end()
});

app.get('/', (req, res) => {
  res.status(200).json("Welcome")
})

app.listen(process.env.PORT, _ => console.log(`server is running at port ${process.env.PORT}`));