const db = require('../data/dbConfig');

module.exports = {
    get,
    findBy,
    findById,
    add,
    update,
    remove
};

function get(strain_id) {
    return db("note")
        .where({ strain_id });
}

function findBy(filter) {
    return db("note")
        .select("id", "user_id", "strain_id")
        .where(filter)
}

function findById(strain_id, note_id) {
    return db("note")
        .where({ strain_id, "id": note_id })
        .first();
}

function add(note) {
    console.log(note)
    return db("note")
        .insert(note)
}

function update(id, changes) {
    return db("note")
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db("note")
        .where("id", id)
        .del();
}