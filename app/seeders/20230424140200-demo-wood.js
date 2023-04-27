'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const softwood = awaitHardness.findOne({
      where: {
        name: 'softwood'
      }
    })
    const exoticWood = awaitHardness.findOne({
      where: {
        name: 'exotic wood'
      }
    })
    const nobleAndHardwoods = awaitHardness.findOne({
      where: {
        name: 'noble and hardwoods'
      }
    })

    const tender = awaitHardness.findOne({
      where: {
        name: 'tender'
      }
    })
    const mediumhard = awaitHardness.findOne({
      where: {
        name: 'medium-hard'
      }
    })
    const hard = awaitHardness.findOne({
      where: {
        name: 'hard'
      }
    })

    await queryInterface.bulkInsert('Woods', [{
      name: 'WoodDemo',
      typeId: softwood.id,
      hardness: tender.id,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Woods', null, {});
  }
};