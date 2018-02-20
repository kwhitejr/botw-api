"use strict";

var Region = require("./region");
var Subregion = require("./subregion");
var LocationType = require("./location-type");

module.exports = function(sequelize, DataTypes) {
  var Locale = sequelize.define(
    "locale",
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
      tableName: "locale",
    },
    {
      classMethods: {
        associate: function(models) {
          Locale.belongsTo(Region, {
            as: "location",
          });

          Locale.belongsTo(Subregion, {
            as: "location",
          });

          Locale.hasOne(LocationType, {
            as: "location_type",
            foreignKey: "location_type_fk",
          });
        },
      },
    }
  );

  return Locale;
};
