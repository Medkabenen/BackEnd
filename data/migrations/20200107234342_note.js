
exports.up = function (knex) {
    return knex.schema.createTable('note', tbl => {
        //id
        tbl.increments();

        //string
        tbl.string('title')
        tbl.string('note')



        //int
        tbl.integer('strain_id').notNullable();
    })

};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('note');
};
