
exports.up = function (knex) {
    return knex.schema.createTable('users', tbl => {
        //ID
        tbl.increments();

        //Strings
        tbl.string('username', 128)
            .notNullable();

        tbl.string('password', 128)
            .notNullable();
    });

};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};
