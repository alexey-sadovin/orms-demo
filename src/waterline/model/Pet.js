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
    breed: {
      type: 'string',
      validations: {
        isIn: ['chihuahua', 'sheep-dog', 'unknown']
      },
      defaultsTo: 'unknown'
    }
  }
};
