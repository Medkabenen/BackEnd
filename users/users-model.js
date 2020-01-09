const db = require('../data/dbConfig');

module.exports = {
    get,
    getBy,
    getById,
    insert,
    update,
    remove
};

function get() {
    return db("users");
}

function getById(id) {
    console.log(id)
    return db("users")
        .select("id", "username", "password")
        .where({ "users.id": id })
        .first();

}

function getBy(filter) {
    console.log(filter)
    return db("users")
        .select("id", "username", "password")
        .where(filter)
        .first();

}

function insert(user) {
    return db("users")
        .insert(user);
}

function update(id, changes) {
    return db("users")
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db("users")
        .where("id", id)
        .del();
}