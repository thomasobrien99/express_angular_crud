
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cars').insert({make: 'Toyota', model: 'Corolla', year: 1998}),
        knex('cars').insert({make: 'Toyota', model: 'Prius', year: 1998}),
        knex('cars').insert({make: 'Toyota', model: 'Sienna', year: 1998})
      ]);
    });
};
