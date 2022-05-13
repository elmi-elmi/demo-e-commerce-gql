exports.Query={
        products:(parent, args, {products}) => products,
        product:(parent, {id}, {products})=>{
        return products.find(product => product.id === id)||null;
    },
        categories:(parent, args, {categories})=>categories,
        category:(parent, args,{categories})=>{
        const {id} = args;
        return categories.find(category=>category.id===id)
    }
}
