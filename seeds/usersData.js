
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({username: "user", password: "password", email: "email@email.com",}),
        knex('users').insert({username: "user", password: "password", email: "email@email.com",}),
        knex('users').insert({username: "user", password: "password", email: "email@email.com",})
      ]);
    });
};
