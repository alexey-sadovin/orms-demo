const {createConnection} = require('typeorm');

class TypeOrmConnection {

  /**
   * @param {Object} config
   */
  constructor(config) {
    /** @private */ this.config = config;
    /** @private */ this.connection = null;
  }

  /**
   * @returns {Promise}
   */
  async init() {
    this.connection = await createConnection(this.config);
  }

  /**
   * @param Entity
   * @returns {Promise<Repository>}
   */
  async getRepository(Entity) {
    if (!this.connection) {
      await this.init();
    }

    return this.connection.getRepository(Entity);
  }
}

module.exports = TypeOrmConnection;
