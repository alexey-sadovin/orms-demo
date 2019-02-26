const Waterline = require('waterline');

class WaterlineConnection {

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
    return new Promise((resolve, reject) => {
      Waterline.start(this.config, (err, connection) => {
        if (err) {
          return reject(err);
        }

        this.connection = connection;
        resolve();
      });
    });
  }

  /**
   * @param name
   * @returns {Promise<Ref>}
   */
  async getModel(name) {
    if (!this.connection) {
      await this.init();
    }

    return Waterline.getModel(name, this.connection);
  }
}

module.exports = WaterlineConnection;
