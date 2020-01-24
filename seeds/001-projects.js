
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          project_name: 'Complete Lab',
          description: 'This is a description'
        },
        {
            id: 2,
            project_name: 'Event planning',
            description: 'Look, another description!'
        },
        {
            id: 3,
            project_name: 'Make a recipe book',
            description: 'Wow, yet another description.'
        }
      ]);
    });
};
