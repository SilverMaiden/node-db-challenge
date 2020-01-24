const db = require('../db-config.js');
module.exports = {
    find,
    add
};

function find() {
    return db('resources');
}


function add(resource) {
    return db('resources')
    .insert(resource, "id")
}
