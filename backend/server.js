require('dotenv').config();
const express = require('express');
const cors =require('cors');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const app = express()
const port = 3000


const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes')


// middleware
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials:true
}));
app.use(express.json());
app.use(cookieParser())

// Database connection

const main =async()=>{
const url = process.env.DB_URL;
const password =process.env.DB_PASSWORD;

const urlWithPassword = url.replace( "<password>", password );
await mongoose.connect(urlWithPassword);
}
main().then(()=>console.log("Database connected")).catch(err=>console.log(err));


// routers

app.use('/products',productRoutes);
app.use('/auth',authRoutes);

// port


app.listen(port, () => {
  console.log(`Server is Running on Port ${port}`)
})