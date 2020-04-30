
const db = require('../db-config.js');
module.exports = {
    find,
    add
};

function find(id) {
    if (id) {
        return db('tasks as t')
        .join('projects', 't.project_id')
        .where('project_id', id)
    } else {
        return db('tasks');
    }

}

function add(task) {
    return db('tasks')
        .insert(task, "id");
}


