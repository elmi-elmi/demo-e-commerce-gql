const {ApolloServer} = require('apollo-server');
const {typeDefs} = require('./schema');
const {Category} = require('./resolver/Category')
const {Query} = require('./resolver/Query')
const {Product} = require('./resolver/Product')

const resolvers = {
    Query,
    Category,
    Product
}
const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
}); 