const {Model} = require('objection');

class Pet extends Model {

  /**
   * @returns {string}
   */
  static get tableName() {
    return 'pets';
  }

  /**
   * Optional JSON schema. This is not the database schema! Nothing is generated
   * based on this. This is only used for validation. Whenever a model instance
   * is created it is checked against this schema
   *
   * @returns {Object}
   */
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['userId', 'name', 'breed'],

      properties: {
        id: {
          type: 'integer'
        },
        userId: {
          type: 'integer'
        },
        name: {
          type: 'string',
          minLength: 1,
          maxLength: 255
        },
        breed: {
          type: 'string',
          enum: ['chihuahua', 'sheep-dog', 'unknown'],
          default: 'unknown'
        }
      }
    };
  }
}

module.exports = Pet;
