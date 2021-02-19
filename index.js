const express = require('express');
const mongoose = require('mongoose');
const TypeDefs = require('./schema');
const bodyParser = require('body-parser');
const cors = require('cors');
const Resolvers = require('./resolvers');

const { ApolloServer } = require('apollo-server-express');

// Using env variables to store sensitive info
const dotenv = require('dotenv');
dotenv.config();

//mongoDB Atlas Connection String
const url = process.env.MONGODB_URL;

// Connection to MongoDB Atlas
const connect = mongoose.connect(url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

connect.then((db) => {
    console.log('Connected to server!');
}, (err) => {
    console.log(err);
});

// Defining Apollo Server
const server = new ApolloServer({
    typeDefs: TypeDefs.typeDefs,
    resolvers: Resolvers.resolvers
});

// Defining Express Server
const app = express();
app.use(bodyParser.json());
app.use('*', cors());
server.applyMiddleware({app});
app.listen({ port: process.env.PORT }, () =>
console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`));