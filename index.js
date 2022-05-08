const {ApolloServer, gql} = require('apollo-server');
const typeDefs = gql`
  type Query {
     hello: [String!]!
     products:[Product!]!

    }
    
  type Product{
      name: String!
      description: String!
      quantity: Int!
      price: Int!
      onsale: Boolean!
  }
`;

const resolvers = {
    Query: {
        hello: () => ['Hello World','ho','name'],
        products:() => [
            {
                name: 'bike',
                description: 'decription for 1',
                quantity: 20,
                price: 100,
                onsale: true,
            }
            ]
    }
}
const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
});