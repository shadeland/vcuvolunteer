'use strict';

/** gives us access to methods such as 
- findAll()
- create()
- update() 
- destroy()
*/

module.exports = function(sequelize, DataTypes) {
  const Profile = sequelize.define('Profile', {
    ID:{ type: DataTypes.UUID, defaultValue: Sequelize.UUIDV1, unique: true },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,

  });
  return Profile;
};