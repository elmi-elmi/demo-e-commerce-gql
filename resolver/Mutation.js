const {v4: uuid} = require('uuid');

exports.Mutation = {
    addNewCategory: (parent, {input}, {categories}) => {
        console.log(categories)
        const newCategory = {
            name: input.name,
            id: uuid()
        }
        categories.push(newCategory);
        console.log(categories)

        return newCategory
    },

    addProduct:(parent, {input}, {products})=>{
        const {name, image,description, quantity,price,onSale, categoryId} = input
        const newProduct = {
            id:uuid(),
            name,
            image,
            description,
            quantity,
            price,
            onSale,
            categoryId,
        }
        products.push(newProduct)

        return newProduct
    },
    addReview:(parent,{input},{reviews})=>{
        const {
            date,
            title,
            comment,
            rating,
            productId} = input

        const newReview = {
            id:uuid(),
            date,title,comment,productId,
            rating,

        }

        reviews.push(newReview)

        return newReview

    }
}


I love graphql  everybody can type very quiekly
