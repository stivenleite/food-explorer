const AppError = require("../utils/AppError");
const { hash, compare } = require("bcryptjs");
const knex = require("../database/knex");

class UsersController {
    async create(request, response){
        // Capturing body parameters
        const { name, email, password } = request.body;
    
        // Checking if email already exists in the database
        const emailExists = await knex("users").where({ email }).first();
        if (emailExists) {
            throw new AppError("Não foi possível cadastrar o usurário. Este e-mail já está cadastrado.")
        }

        // Encrypting user password
        const hashedPassword = await hash(password, 8);

        // Checking if email domain belongs to the company. This will provide admin acess for the user.
        let admin = "";
        const emailDomain = email.split("@")[1]
        if (emailDomain === "foodexplorer.com") {
            admin = true;
        } else {
            admin = false;
        }

        // Inserting info in the database
        await knex("users").insert({
            name,
            email,
            password: hashedPassword,
            admin 
        })

        
        return response.status(201).json();
    }
}

module.exports = UsersController;