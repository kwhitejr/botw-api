"use strict";

var Locale = require("./location");

module.exports = function(sequelize, DataTypes) {
  var LocationType = sequelize.define(
    "Location_type",
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
    },
    {
      classMethods: {
        associate: function(models) {
          LocationType.hasMany(Locale, {
            foreignKey: "location_type_fk",
          });
        },
      },
    }
  );

  return LocationType;
};
