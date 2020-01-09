const db = require('../data/dbConfig')

module.exports = {
    get,
    findById,
    add,
    update,
    remove
};

function get(id) {
    return db('strain')
        .where({ 'user_id': id });
}

function findById(id, strain_id) {
    return db('strain')
        .where({ 'user_id': id, 'id': strain_id })
        .first();
}

function add(strain) {
    return db('strain')
        .insert(strain)
}

function update(id, changes) {
    return db('strain')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('strain')
        .where('id', id)
        .del();
}