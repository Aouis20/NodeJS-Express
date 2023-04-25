'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Woods', [{
      name: 'Wood1',
      type: "softwood",
      hardness: "tender",
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Woods', null, {});
  }
};