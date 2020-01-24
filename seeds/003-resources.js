
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          id: 1,
          resource_name: 'Computer',
          description: 'A computer is super useful for lots of stuff.'
        },
        {
            id: 2,
            resource_name: 'NotePad',
            description: 'Super helpful for taking notes!'
        },
        {
            id: 3,
            resource_name: 'Phone',
            description: 'All the better to call for help!'
        }
      ]);
    });
};
