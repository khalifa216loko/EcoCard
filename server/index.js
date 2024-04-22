const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const Card = require('./models/cardModel');
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB Atlas');
        app.listen(PORT, () => {
            console.log("Server is running on port ${PORT}");
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error.message);
    });

    //  new card document
    const newCard = new Card({
      cardNumber: '1234567890123456', //  card number
      expirationDate: new Date('2025-12-31'), // Example expiration 
      cardHolderName: 'John Doe', // Example cardholder name
      balance: 100 // Example starting of balance
    });