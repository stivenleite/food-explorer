const AppError = require("../utils/AppError");
const knex = require("../database/knex");
const DiskStorage = require("../providers/DiskStorage");
const { diskStorage } = require("multer");

class ProductsController {
    async create(request, response){
        // Capturing body parameters
        const { name, description, category, price, ingredients } = request.body
        const image = request.file.filename
        
        // Instantiating DiskStorage
        const diskStorage = new DiskStorage();

        // Checking if product name already exists in the database
        const checkNameExists = await knex("products").where({ name }).first();
        if (checkNameExists) {
            await diskStorage.deleteTmpFile(image); // deleting image from tmp folder
            throw new AppError("Já existe um produto cadastrado com este nome.")
        }

        // Saving image in the uploads folder
        await diskStorage.saveFile(image)

        // Inserting information in table "products" from the database
        const [ product_id ] = await knex("products").insert({
            name,
            description,
            image,
            category,
            price
        });

        // Processing and inserting information in table "ingredients" from the database
        if (ingredients) {
            let ingredientsInsert;

            if (typeof ingredients == "string") {
                ingredientsInsert = {
                    name: ingredients,
                    product_id
                }
            } else {
                ingredientsInsert = ingredients.map(name => {
                    return {
                        name,
                        product_id
                    }
                });
            }
    
            await knex("ingredients").insert(ingredientsInsert);
        }


        return response.status(201).json();
    }

    async update(request, response){
        // Capturing body parameters
        const { id } = request.params
        const { name, description, category, price, ingredients } = request.body
        let image;
        try {
            image = request.file.filename
        } catch {
            image = null;
        };


        // Selecting product in the database according with the id informed
        const product = await knex("products").where({ id }).first();
        
        // Instantiating DiskStorage
        const diskStorage = new DiskStorage();
        
        // Deleting old image and saving/updating new one only if there is a new image
        if(image){
            await diskStorage.deleteFile(product.image);
            await diskStorage.saveFile(image);
        }
        
        // Updating infos
        product.name = name ?? product.name;
        product.description = description ?? product.description;
        product.image = image ?? product.image;
        product.category = category ?? product.category;
        product.price = price ?? product.price;

        // Inserting updated infos in "products" table from the database
        await knex("products").where({ id }).update(product);

        // Deleting all ingredients from the product 
        await knex("ingredients").where({ product_id: product.id }).delete();
        
        // Processing and updating table "ingredients" from the database
        if (ingredients) {
            let ingredientsInsert;

            if (typeof ingredients == "string") {
                ingredientsInsert = {
                    name: ingredients,
                    product_id: product.id
                }
            } else {
                ingredientsInsert = ingredients.map(name => {
                    return {
                        name,
                        product_id: product.id
                    }
                });
            }
    
            await knex("ingredients").insert(ingredientsInsert);
        }


        return response.json()
    }

    async index(request, response){
        // Capturing body parameters
        const { searchParam } = request.query;

        // Initializating variables. The "products" here are set to be filtered by the name of it.
        let products = await knex("products").whereLike("name", `%${searchParam}%`).orderBy("name");
        let ingredients = await knex("ingredients");

        // Condition to start searching by ingredients, since no product was found by name.
        if (products.length === 0) {
            // Retrieving ingredients that match the search parameter
            ingredients = await knex("ingredients").whereLike("name", `%${searchParam}%`);

            const allProducts = await knex("products").orderBy("name");

            // Filtering all the products by the ingredients that are similiar to the search parameter.
            products = ingredients.map(ingredient => {
                const productsByIngredients = allProducts.filter(product => product.id === ingredient.product_id);
                return productsByIngredients[0]; 
            });
        }

        // Merging the product with its respective ingredients 
        const productsWithIngredients = products.map(product => {
            const productIngredients = ingredients.filter(ingredient => ingredient.product_id === product.id);
            return {
                ...product,
                ingredients: productIngredients
            }
        });


        return response.json(productsWithIngredients);
    }

    async show(request, response){
        // Capturing body parameters
        const { id } = request.params;

        // Retrieving data from the "products" and "ingredients" according to the parameter informed
        const product = await knex("products").where({ id }).first();
        const ingredients = await knex("ingredients").where({ product_id: id }).orderBy("name");

        // Showing the product and its ingredients
        return response.json({
            ...product,
            ingredients
        });
    }

    async delete(request, response){
        // Capturing body parameters
        const { id } = request.params;

        // Deleting product image from disk storage
        const product = await knex("products").where({ id }).first();
        const diskStorage = new DiskStorage();
        await diskStorage.deleteFile(product.image);

        // Deleting info from the database
        await knex("products").where({ id }).delete();


        return response.json();
    }
}

module.exports = ProductsController;