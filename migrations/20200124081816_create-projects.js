
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('project_name', 128)
        .notNullable();
      tbl.string('description', 128)
      tbl.boolean('completed')
        .notNullable()
        .defaultTo(false);
    })

    .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('resource_name', 128)
        .notNullable()
        .unique();
      tbl.string('description', 128)
    })


    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('description', 128)
        .notNullable();
      tbl.string('notes', 128);
      tbl.boolean('completed')
        .notNullable()
        .defaultTo(false);
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
    })
    .createTable('project-resources', tbl => {
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')

      tbl.primary(['project_id', 'resource_id']);
    });
}

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project-resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
