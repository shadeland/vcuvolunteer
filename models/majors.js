'use strict';
module.exports = (sequelize, DataTypes) => {
  var major = sequelize.define('major', {
    ID:{ type: DataTypes.UUID, defaultValue: DataTypes.UUIDV1, primaryKey: true },
    major_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {

        major.belongsToMany(models.profisdle,{through: 'ProfileMajor'});
        // associations can be defined here
      }
    }
  });

  major.associate = function (models){
    major.belongsToMany(models.profile,{through: 'ProfileMajor'});
  };
  return major;
};