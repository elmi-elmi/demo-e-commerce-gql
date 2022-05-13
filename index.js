const {ApolloServer} = require('apollo-server');
const {typeDefs} = require('./schema.js');
const {Category} = require('./resolver/Category')
const {Query} = require('./resolver/Query')
const {Product} = require('./resolver/Product')
const {categories, products} = require('./db');
const resolvers = {
    Query,
    Category,
    Product
}

const context = {
    categories,
    products
}
const server = new ApolloServer({typeDefs, resolvers, context});

server.listen().then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
}); 