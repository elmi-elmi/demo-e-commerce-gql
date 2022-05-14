exports.Query={
        products:(parent, {filter}, {products}) => {
            let filteredProducts = products;

            if(filter){
                if(filter.onSale){
                    filteredProducts = filteredProducts.filter(product=>product.onSale)
                }
            }

            return filteredProducts
        },
        product:(parent, {id}, {products})=>{
        return products.find(product => product.id === id)||null;
    },
        categories:(parent, args, {categories})=>categories,
        category:(parent, args,{categories})=>{
        const {id} = args;
        console.log(categories.find(category=>category.id===id))
        return categories.find(category=>category.id===id)
    }
}
