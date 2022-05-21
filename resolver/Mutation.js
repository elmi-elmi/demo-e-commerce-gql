const {v4: uuid} = require('uuid');

exports.Mutation = {
    addNewCategory: (parent, {input}, {db}) => {
        const newCategory = {
            name: input.name,
            id: uuid()
        }
        db.categories.push(newCategory);

        return newCategory
    },

    addProduct:(parent, {input}, {db})=>{
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
        db.products.push(newProduct)

        return newProduct
    },
    addReview:(parent,{input},{db})=>{
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

        db.reviews.push(newReview)

        return newReview

    },
    deleteCategory:(parent,{id},{db})=>{

        db.categories = db.categories.filter(category=>category.id!==id)
        db.products.forEach(product=>{
            if(product.categoryId === id) product.categoryId = null
        })
        return true
    },
    deleteProduct:(parent,{id}, {db})=>{
        db.products = db.products.filter(p=>p.id!==id);
        db.reviews = db.reviews.filter(r=>r.productId!==id)
        return true
    }
}




