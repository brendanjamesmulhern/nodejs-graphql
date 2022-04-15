const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

const port = process.env.PORT || 8080;

const server = new ApolloServer({
    resolvers,
    typeDefs
});

server.listen({ port}, () => console.log("Server started on Port 8080"));