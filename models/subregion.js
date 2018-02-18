"use strict";

var Region = require("./region");
var Locale = require("./location");

module.exports = function(sequelize, DataTypes) {
  var Subregion = sequelize.define(
    "subregion",
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
      tableName: "subregion",
    }
  );

  Subregion.belongsTo(Region, {
    foreignKey: "region_fk",
  });

  Subregion.hasMany(Locale, {
    as: "locations",
    foreignKey: "subregion_fk",
  });

  return Region;
};
