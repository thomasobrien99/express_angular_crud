
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cars', (table)=>{
  	table.increments();
  	table.string('make');
  	table.string('model');
  	table.integer('year');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cars');
};
