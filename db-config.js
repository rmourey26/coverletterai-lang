const knex = require('knex');

const config = require('../pages/api/knexpg.js');

const db = knex(config);

module.exports = db;