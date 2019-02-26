module.exports = {
  attributes: {
    id: {
      type: 'string',
      columnName: '_id'
    },
    name: {
      type: 'string',
      required: true
    },
    pets: {
      collection: 'pet'
    }
  }
};
