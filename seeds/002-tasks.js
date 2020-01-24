
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1,
          description: 'Learn more science',
          project_id: 1
        },
        {
            id: 2,
            description: 'Find caterers',
            project_id: 2
        },
        {
            id: 3,
            description: 'Create guest list',
            project_id: 2
        },
        {
            id: 4,
            description: 'Find favourite recipes',
            project_id: 3
        }
      ]);
    });
};
