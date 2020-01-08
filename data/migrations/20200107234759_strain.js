
exports.up = function (knex) {
    return knex.schema.createTable('strain', tbl => {
        //id
        tbl.increments();

        //string
        tbl.string('strain_name').notNullable();
        tbl.string('strain_dose').notNullable();
        tbl.string('intake_method').notNullable();
        tbl.string('intake_schedule').notNullable();


        //int
        tbl.integer('user_id').notNullable();
    })

};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('strain');
};
