"use strict";

var Subregion = require("./subregion");
var Locale = require("./location");

module.exports = function(sequelize, DataTypes) {
  var Region = sequelize.define(
    "region",
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
      tableName: "region",
    }, 
    {
      classMethods: {
        associate: function(models) {
          Region.hasMany(Subregion, {
            as: "subregions",
            foreignKey: "region_fk",
          });
          
          Region.hasMany(Subregion, {
            as: "subregions",
            foreignKey: "region_fk",
          });
        
          Region.hasMany(Locale, {
            as: "locations",
            foreignKey: "region_fk",
          });
        }
      }
    }
  );

 

  return Region;
};
