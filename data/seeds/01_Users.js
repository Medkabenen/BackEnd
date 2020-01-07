
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'Mike', email: 'mike@gmal.com', password: 'pass1' },
        { id: 2, username: 'Jim', email: 'jim@gmal.com', password: 'pass2' },
        { id: 3, username: 'Greg', email: 'greg@gmal.com', password: 'pass3' }
      ]);
    });
};
