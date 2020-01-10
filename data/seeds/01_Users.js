
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'Mike', password: 'pass1' },
        { id: 2, username: 'Jim', password: 'pass2' },
        { id: 3, username: 'Greg', password: 'pass3' }
      ]);
    });
};
