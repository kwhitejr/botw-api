"use strict";

module.exports = function(sequelize, DataTypes) {
  var Subregion = sequelize.define(
    "Subregion",
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
      tableName: "subregions",
    }
  );

  Subregion.belongsTo(Region, {
    as: "region_fk",
    foreignKey: "id",
  });

  Subregion.hasMany(Locale, {
    as: "locations",
    foreignKey: "id",
  });

  return Region;
};
