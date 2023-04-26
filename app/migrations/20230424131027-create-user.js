'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Le champ firstName est obligatoire.'
          }
        }
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Le champ lastName est obligatoire.'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
          msg: 'L\'email doit être unique.'
        },
        validate: {
          notNull: {
            msg: 'Le champ email est obligatoire.'
          },
          isEmail: {
            msg: 'L\'email doit être au bon format.'
          }
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Le champ password est obligatoire.'
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  // Dans le down toujours mettre l'inverse de up()
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};