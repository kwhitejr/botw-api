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
    },
    {
      classMethods: {
        associate: function(models) {
          Subregion.belongsTo(Region, {
            as: "subregion",
          });

          Subregion.hasMany(Locale, {
            as: "locations",
            foreignKey: "subregion_fk",
          });
        },
      },
    }
  );

  return Region;
};
