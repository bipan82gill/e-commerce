const functions = require('firebase-functions');
const express = require("express");
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HQz2iI435O7um1ZcsU0umvWL0L5RRXPr0UQK3SMVxJroeYTLWKtNCyd6YxRCZMupDyhTXEHoWA2PrBWbtjWCzUB00mJgJjkvp')
// API

// -App config
const app = express();
// -Middleware
app.use(cors({ origin: true}));
app.use(express.json());
// -API routes
app.get('/', (request, response)=> response.status(200).send('hello world'));

app.post('/payments/creste', async(request, response)=>{
    const total = request.query.total;
    console.log("Payment Request Recieved Boom !!!", total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency:"usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// -Listen command
exports.api = functions.https.onRequest(app)
// example endpoint 
//http://localhost:5001/e-commerce-5fa7c/us-central1/api