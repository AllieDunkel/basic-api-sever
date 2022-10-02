'use strict';

module.exports = (db, DataTypes) => {
  return db.define('Cat', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  });
}