'use strict';
module.exports = (sequelize, DataTypes) => {
  var Profile = sequelize.define('profile', {
    ID:{ type: DataTypes.UUID, defaultValue: DataTypes.UUIDV1, primaryKey: true },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        
        Profile.belongsToMany(models.major,{through: 'ProfileMajor'});
        // associations can be defined here

      }
    }
  });

  Profile.associate = function (models){
        
        Profile.belongsToMany(models.major,{through: 'ProfileMajor'});
  };
  return Profile;
};