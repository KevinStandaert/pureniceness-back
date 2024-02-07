/**
 * @typedef {object} Example
 * @property {integer} id - Example id
 * @property {string} name - Example title
 * @property {integer} number - Example number
 * @property {string} created_at - Example created_at
 * @property {string} updated_at - Example updated_at
 */

/**
 * @typedef {object} ExampleInput
 * @property {string} name - Example title
 * @property {integer} number - Example number
 */

import CoreDatamapper from './core.datamapper.js';

export default class ExampleDatamapper extends CoreDatamapper {
  static readTableName = 'example';

  static writeTableName = 'example';
}
