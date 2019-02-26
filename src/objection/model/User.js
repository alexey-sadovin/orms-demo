const {Model} = require('objection');
const Pet = require('./Pet');

class User extends Model {

  /**
   * @returns {string}
   */
  static get tableName() {
    return 'users';
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
      required: ['name'],

      properties: {
        id: {
          type: 'integer'
        },
        name: {
          type: 'string',
          minLength: 1,
          maxLength: 255
        }
      }
    };
  }

  /**
   * @returns {Object}
   */
  static get relationMappings() {
    return {
      pets: {
        relation: Model.HasManyRelation,
        // The related model. This can be either a Model subclass constructor or an
        // absolute file path to a module that exports one.
        modelClass: Pet,
        join: {
          from: 'users.id',
          to: 'pets.userId'
        }
      }
    };
  }
}

module.exports = User;
