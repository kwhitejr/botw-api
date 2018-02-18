"use strict";

module.exports = function(sequelize, DataTypes) {
  var Region = sequelize.define(
    "Region",
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
      tableName: "regions",
    }
  );

  Region.hasMany(Subregion, {
    as: "subregions",
    foreignKey: "id",
  });

  // Region.hasMany(Location, {as: "locations"});

  return Region;
};
