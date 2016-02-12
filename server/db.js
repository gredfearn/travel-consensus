const config = require('../knexfile');
const env    = process.env.NODE_ENV || 'development';
const pg     = require('knex')(config[env]);

module.exports = pg;

// This helps to ensure that the running database's schema is up to date
pg.migrate.latest([config])
