exports.up = knex => knex.schema.createTable("products", table => {
    table.increments("id")
    table.string("name")
    table.string("description")
    table.string("image")
    table.string("category")
    table.string("price")
  })
  
exports.down = knex => knex.schema.dropTable ("products")