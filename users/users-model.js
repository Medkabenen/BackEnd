const db = require('../data/dbConfig');

module.exports = {
    get,
    getById,
    insert,
    update,
    remove
};

function get() {
    return db("users");
}

function getById(user) {
    console.log(user)
    return db("users")
        // .select("id", "username", "password")
        .where({ "username": user.username })
    // .first();

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