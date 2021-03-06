"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("countries_general", {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      country: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      literacy: {
        type: Sequelize.FLOAT,
      },
      phones: {
        type: Sequelize.FLOAT,
      },
      birthrate: {
        type: Sequelize.FLOAT,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("countries_general");
  },
};
