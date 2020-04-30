const db = require('../db-config.js');
module.exports = {
    find,
    findTasks,
    findResources,
    add
};

function find(id) {
    if (id) {
        return db('projects')
        .where('projects.id', id)
        .first()
    } else {
        return db('projects');
    }

    return db('projects');
}

function findTasks(id) {
    return db('projects as p' )
        .join('tasks as t', 'p.id', 't.project_id')
        .where('p.id', id)

}

function findResources(id) {
    return db('project-resources as pr' )
        .join('projects as p', 'pr.project_id', 'p.id')
        .join('resources as r', 'pr.resource_id', 'r.id')
        .where('p.id', id)

}


function add(project) {
    return db('projects')
    .insert(project, "id")
    .then(([id]) => this.find(id));
}
