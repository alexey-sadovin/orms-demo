class CaminteConnection {

  /**
   * @param {Object} config
   */
  constructor(config) {
    /** @private */ this.config = config;
    /** @private */ this.connection = null;
  }
}

module.exports = CaminteConnection;
