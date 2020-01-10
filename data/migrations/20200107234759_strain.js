
exports.up = function (knex) {
    return knex.schema.createTable('strain', tbl => {
        //id
        tbl.increments();

        //string
        tbl.string('strain_name').notNullable();
        tbl.string('strain_type').notNullable();
        tbl.string('strain_description').notNullable();




        //int
        tbl.integer('user_id').notNullable();
    })

};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('strain');
};
