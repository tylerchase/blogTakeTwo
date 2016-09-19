exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table){
    table.increments();
    table.string('comment_on_blog_id');
    table.string('comment_author');
    table.text('comment_content');
    table.timestamp('created_at');
    table.timestamp('updated_at');
    //would I add any information here if I am using passport for OAuth?
    //for example :
    // table.boolean('connection_by_passport')
  });

};


exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')
};
