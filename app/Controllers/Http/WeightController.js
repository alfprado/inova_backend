'use strict'

const Weight = use('App/Models/Weight')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with weights
 */
class WeightController {
  /**
   * Show a list of all weights.
   * GET weights
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index() {

    const weights = await Weight.all()

    return weights;
  }

  /**
   * Create/save a new weight.
   * POST weights
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {

    const data = request.only(['weight', 'latitude', 'longitude'])
    const weight = await Weight.create({ ...data });
    return weight
  }
}

module.exports = WeightController
