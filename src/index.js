const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const projectTypeDefs = require('./schemas/projectSchema');  // Esquema de proyectos
const projectResolvers = require('./resolvers/projectResolver');  // Resolvers de proyectos

const app = express();

// Define los typeDefs y resolvers de proyectos
const typeDefs = [projectTypeDefs];
const resolvers = [projectResolvers];

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.start().then(() => {
  server.applyMiddleware({ app });

  // Conectar a MongoDB
  mongoose.connect('mongodb://localhost:27017/your-db-name')  
    .then(() => {
      console.log('Connected to MongoDB');
      app.listen({ port: 4000 }, () =>
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
      );
    }).catch(err => {
      console.error('Error connecting to MongoDB', err);
    });
});
