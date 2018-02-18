"use strict";

module.exports = function(sequelize, DataTypes) {
  var LocationType = sequelize.define(
    "location_type",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "location_type",
    }
  );

  return LocationType;
};
