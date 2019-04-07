'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WeightSchema extends Schema {
  up() {
    this.create('weights', (table) => {
      table.increments()
      table.decimal('weight', 2).notNullable()
      table.decimal('latitude').notNullable()
      table.decimal('longitude').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('weights')
  }
}

module.exports = WeightSchema
