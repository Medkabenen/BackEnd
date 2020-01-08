
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('strain')
    .then(function () {
      // Inserts seed entries
      return knex('strain').insert([
        { id: 1, user_id: 1, strain_name: '100-Og', strain_dose: '3g', intake_method: 'oral', intake_schedule: '2 times per day' },
        { id: 2, user_id: 2, strain_name: 'Afgani', strain_dose: '2g', intake_method: 'topical', intake_schedule: '2 times per day' },
      ]);
    });
};
