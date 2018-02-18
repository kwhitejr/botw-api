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
    }
  );

  // Locale.belongsTo(Region, {
  //   foreignKey: "region_fk",
  // });

  // Locale.belongsTo(Subregion, {
  //   foreignKey: "subregion_fk",
  // });

  // Locale.belongsTo(LocationType, {
  //   foreignKey: "location_type_fk",
  // });

  return Locale;
};
