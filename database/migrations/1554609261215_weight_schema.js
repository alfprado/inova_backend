'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WeightSchema extends Schema {
  up() {
    this.create('weights', (table) => {
      table.increments()
      table.double('weight').notNullable()
      table.double('latitude').notNullable()
      table.double('longitude').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('weights')
  }
}

module.exports = WeightSchema
