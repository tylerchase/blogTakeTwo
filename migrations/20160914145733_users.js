exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.string('username');
    table.string('password');
    table.string('email');
    table.timestamp('created_at');
    table.timestamp('updated_at');
    //would I add any information here if I am using passport for OAuth?
    //for example :
    // table.boolean('connection_by_passport')
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
