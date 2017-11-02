'use strict';
module.exports = (sequelize, DataTypes) => {
  var volunteers_table = sequelize.define('volunteers_table', {
    first_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return volunteers_table;
};