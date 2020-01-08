
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('note').del()
    .then(function () {
      // Inserts seed entries
      return knex('note').insert([
        { id: 1, strain_id: 1, title: 'Good Stuff', note: 'Like it very much' },
        { id: 2, strain_id: 2, title: 'Order next week', note: 'Make sure to order 100g' }
      ]);
    });
};
