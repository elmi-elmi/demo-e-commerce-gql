const {gql} = require('apollo-server')
exports.typeDefs = gql`
  type Query {
     hello: [String!]!
     products(filter:ProductFilterInput):[Product!]!
     product(id:ID!):Product
     categories:[Category!]
     category(id:ID!):Category
    }
    
  type Mutation{
    addNewCategory(input:AddCategoryInput!):Category!
    addProduct(input:AddProductInput!):Product!
    addReview(input:AddReviewInput!):Review!
    deleteCategory(id:ID!):Boolean!
    deleteProduct(id:ID!):Boolean!
  }
  input AddReviewInput {
    date:String!
    title:String!
    comment:String!
    rating:Int!
    productId:String!
  }
  input AddProductInput{
      name: String!
      image:String!
      description: String!
      quantity: Int!
      price: Float!
      onSale: Boolean!
      categoryId:String!
  }

  input AddCategoryInput{
    name:String!
  }
 type Product{
      id:ID!
      name: String!
      description: String!
      quantity: Int!
      price: Float!
      onSale: Boolean!
      category:Category
      reviews:[Review!]!
      categoryId:String
  }
  
  type Category{
    id: ID!
    name:String
    products(filter:ProductFilterInput):[Product!]
  }
  
  type Review {
    id: ID!
    date:String!
    title:String!
    comment:String!
    rating:Int!  
    productId:ID! 
  }
  
  input ProductFilterInput{
    onSale:Boolean!
    avgRating:Int!
  }

`;
