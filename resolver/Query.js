exports.Query={
        products:(parent, {filter}, {db}) => {
            let filteredProducts = db.products;

            if(filter){
                if(filter.onSale){
                    filteredProducts = filteredProducts.filter(product=>product.onSale)
                }
            }

            return filteredProducts
        },
        product:(parent, {id}, {db})=>{
        return db.products.find(product => product.id === id)||null;
    },
        categories:(parent, args, {db})=>db.categories,
        category:(parent, args,{db})=>{
        const {id} = args;
        return db.categories.find(category=>category.id===id)
    }
}
