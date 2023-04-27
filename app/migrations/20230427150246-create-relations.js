'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Woods', null, {});

    await queryInterface.addColumn("Woods", "typeId", {
      type: Sequelize.INTEGER,
      allowNUll: false,
    })

    await queryInterface.addColumn("Woods", "hardnessId", {
      type: Sequelize.INTEGER,
      allowNull: false
    })

    await queryInterface.addConstraint("Woods", {
      fields: ["typeId"],
      type: "foreign key",
      name: "fk_wood_type",
      references: {

      }
    })

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.addColumn("Woods", "type", {
      type: Sequelize.ENUM,
      values: ["softwood", "exotic wood", "noble and hardwoods"],
    });

    await queryInterface.addColumn("Woods", "hardness", {
      type: Sequelize.ENUM,
      values: ["tender", "medium-hard", "hard"],
    });

    await queryInterface.removeConstraint("Woods", "fk_wood_type");
    await queryInterface.removeColumn("Woods", "typeId");
    
    await queryInterface.removeConstraint("Woods", "fk_wood_hardness");
    await queryInterface.removeColumn("Woods", "hardnessId");
  }
};