const Sequelize = require('sequelize');
const User = require('./model/User');
const Pet = require('./model/Pet');

class SequelizeConnection {

  /**
   * @param {string} db
   * @param {string} user
   * @param {string} password
   * @param {object} opts
   */
  constructor(db, user, password, opts) {
    /** @private */
    this.connection = new Sequelize(db, user, password, opts);

    /** @private */ this.userModel = null;
    /** @private */ this.petModel = null;
  }

  /**
   * @returns {Promise}
   */
  async init() {
    await this.connection.authenticate();
    await this.connection.sync();

    this.petModel = Pet(this.connection);
    this.userModel = User(this.connection, this.petModel);
  }

  /**
   * @returns {Sequelize}
   */
  getConnection() {
    return this.connection;
  }

  /**
   * @returns {User}
   */
  getUserModel() {
    return this.userModel;
  }

  /**
   * @returns {User}
   */
  getPetModel() {
    return this.petModel;
  }
}

module.exports = SequelizeConnection;
