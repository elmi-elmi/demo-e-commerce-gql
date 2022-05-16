exports.Category={
    products:({id}, {filter}, {products, reviews})=>{
        let filteredProducts = products.filter(product=>product.categoryId === id);

        if(filter){
            const {onSale, avgRating} = filter

            if(filter.onSale){
                filteredProducts = filteredProducts.filter(product=>product.onSale)
            }

            if([1,2,3,4,5].includes(avgRating)){
                filteredProducts = filteredProducts.filter(product=>{
                    let sumRating = 0;
                    let reviewNumber=0;
                    reviews.forEach(review=>{
                        if(review.productId === product.id){
                            sumRating += review.rating
                            reviewNumber++
                        }
                    })
                    return (sumRating/reviewNumber) >= avgRating
                })
            }
        }
        return filteredProducts
    }
}