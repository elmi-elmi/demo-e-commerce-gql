const {ApolloServer} = require('apollo-server');
const {typeDefs} = require('./schema.js');
const {Category} = require('./resolver/Category')
const {Query} = require('./resolver/Query')
const {Product} = require('./resolver/Product')
const {categories, products, reviews} = require('./db');
const {Mutation} = require('./resolver/Mutation')
const resolvers = {
    Query,
    Category,
    Product,
    Mutation
}

const context = {
    categories,
    products,
    reviews
}
const server = new ApolloServer({typeDefs, resolvers, context});

server.listen().then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
});
