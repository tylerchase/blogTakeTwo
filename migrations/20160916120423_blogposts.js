exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogposts', function(table){
    table.increments();
    table.string('blog_author');
    table.string('blog_title');
    table.text('blog_content');
    table.timestamp('created_at');
    table.timestamp('updated_at');
    //would I add any information here if I am using passport for OAuth?
    //for example :
    // table.boolean('connection_by_passport')
  });

};


exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blogposts')
};
