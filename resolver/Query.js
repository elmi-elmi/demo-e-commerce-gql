const {products, categories} = require("../db");
exports.Query={
    hello: (parent, args, context) => ['Hello World','ho','name'],
        products:(parent, args, context) => products,
        product:(parent, args, context)=>{
        const productId = args.id;
        return products.find(product => product.id === productId)||null;
    },
        categories:(parent, args, context)=>categories,
        category:(parent, args,context)=>{
        const {id} = args;
        return categories.find(category=>category.id===id)
    }
}
