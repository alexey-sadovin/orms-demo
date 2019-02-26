const MongoAdapter = require('sails-mongo');
const User = require('./model/User');
const Pet = require('./model/Pet');

module.exports = {
  adapters: {
    'sails-mongo': MongoAdapter
  },

  datastores: {
    default: {
      adapter: 'sails-mongo',
      url: 'mongodb://localhost/test-waterline'
    }
  },

  models: {
    user: User,
    pet: Pet
  },

  defaultModelSettings: {
    primaryKey: 'id',
    datastore: 'default',
    attributes: {
      id: {
        type: 'string',
        autoMigrations: {
          autoIncrement: true
        }
      }
    }
  }
};
