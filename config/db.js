const { Model } = require('objection');

const knex = require('knex')(require('../knexfile').development);

Model.knex(knex);

module.exports = knex;
